import Airtable from 'airtable';
import { NextResponse } from 'next/server';
// @ts-expect-error: old library
import nodemailer from 'nodemailer';

interface RequestData {
  name: string;
  surname: string;
  email: string;
  days: string;
  engTrans: boolean;
  ukrTrans: boolean;
  needAccommodation: boolean;
  birthYear: number;
}

interface Result {
  isResolved: boolean;
  errMessage: string;
}

async function airtableRequest(data: RequestData): Promise<Result> {
  let isResolved = false;
  let errMessage = '';

  await new Promise<void>((resolve: () => void, reject: (reason?: string) => void) => {
    try {
      const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN! }).base(process.env.AIRTABLE_BASE!);
      base('Uczestnicy').create(
        [
          {
            fields: {
              "Imię": data.name,
              "Nazwisko": data.surname,
              "Email": data.email,
              "Dni": data.days,
              "Rok urodzenia": data.birthYear,
              "Tłumaczenie angielskie": data.engTrans,
              "Tłumaczenie ukraińskie": data.ukrTrans,
              "Data rejestracji": new Date().toLocaleDateString(),
              "Zakwaterowanie": data.needAccommodation
            }
          }
        ],
        function (err: Error | null) {
          if (err) {
            reject("Error while adding data to Airtable: " + err);
          } else {
            isResolved = true;
            resolve();
          }
        }
      );
    } catch (err) {
      console.error(err);
      reject("Error while connecting to Airtable");
    }
  }).catch(err => {
    console.error(err);
    errMessage = String(err);
  });

  return { isResolved, errMessage };
}

async function sendEmail(email: string): Promise<Result> {
  let isResolved = false;
  let errMessage = '';

  try {
    const transporter = nodemailer.createTransport({
      host: "mail.plomienducha.pl",
      port: 465,
      secure: true,
      auth: {
        user: "info@plomienducha.pl",
        pass: "jvnTMHyA537NLWhX",
      }
    });

    await transporter.sendMail({
      from: '"Płomień Ducha" <info@plomienducha.pl>',
      to: email,
      subject: "Płomień Ducha 2025: Rejestracja na konferencję",
      html: 
      `
        <!DOCTYPE html>
        <html lang="pl">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="color-scheme" content="light only" />
          <meta name="supported-color-schemes" content="light only" />
          <title>Rejestracja na konferencję</title>
        </head>
        <body style="margin:0; padding:0; background-color:#f6f6f6; font-family:'Georgia', serif; color:#a9433f;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background: linear-gradient(180deg, #f6f6f6 0%, #f6f6f6 20%, #f1cbb2 72%, #7ec0d0 100%);
                        background-color: #f6f6f6;">
            <tr>
              <td align="center">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="center" style="padding: 40px 0 20px 0;">
                      <img src="https://0f04dd397a.imgdist.com/pub/bfra/rdrbfg38/dfz/yln/5i1/logo.png"
                          alt="Logo konferencji Płomień Ducha 2025"
                          width="120"
                          style="display: block; margin: 0 auto; border: 0;" />
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="padding-top: 20px; font-size: 24px; font-weight: bold;">
                      Dziękujemy za rejestrację!
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="padding-top: 16px; font-size: 18px;">
                      Cieszymy się, że dołączysz do nas 6–7 VI 2025 r. we Wrocławiu.
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="padding-top: 10px; font-size: 18px;">
                      Wkrótce prześlemy Ci więcej szczegółów o konferencji.
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="padding-top: 20px; padding-bottom: 40px; font-size: 16px;">
                      Płomień Ducha • 6–7 VI 2025 r.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>

      `
    });

    isResolved = true;
  } catch (err) {
    errMessage = String(err);
  }

  return { isResolved, errMessage };
}


export async function POST(req: Request) {
  try {
    const body: RequestData = await req.json();

    const result = await airtableRequest(body);
    if (!result.isResolved) throw new Error(result.errMessage);

    const mail = await sendEmail(body.email);
    if (!mail.isResolved) throw new Error(mail.errMessage);

    return NextResponse.json({ result: 'ok' }, { status: 200 });
  } catch (err: Error | unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : String(err) }, { status: 500 });
  }
}
