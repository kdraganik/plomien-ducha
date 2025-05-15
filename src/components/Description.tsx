import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/description.module.scss';
import speaker1 from '@/images/mowca1.png'
import speaker2 from '@/images/mowca2.png'
import speaker3 from '@/images/mowca3.png'

export default function Description() {
    return (
        <div className={styles.container}>
            <p className={styles.paragraph}>Gorąco zapraszamy na kolejną edycję Okręgowej Konferencji Przebudzeniowej „Płomień Ducha” we Wrocławiu.</p>
            <h2 className={styles.subtitle}>Wizja i cel</h2>
            <p className={styles.paragraph}>Myśl o konferencji narodziła się w naszych sercach w odpowiedzi na żywą obecność Ducha Świętego. Nieustannie porusza nas Jego działanie w naszych kościołach, regionie i kraju — pragniemy w jedności poznawać Go jeszcze lepiej. </p>
            <p className={styles.paragraph}>Podczas każdej sesji chcemy wspólnie doświadczać Bożej mocy w uwielbieniu, modlitwie i głoszonym Słowie. Stworzymy przestrzeń, aby Bóg mógł przemawiać w sposób proroczy. Modląc się za uczestników, będziemy oczekiwać uzdrowienia, uwolnienia, cudów i objawienia od Ducha Świętego.</p>
            <h2 className={styles.subtitle}>Data i miejsce</h2>
            <p className={styles.paragraph}>Spotykamy się 6 i 7 czerwca 2025 r. w budynku wrocławskiego kościoła „Antiochia” przy ulicy Powstańców Śląskich 199.</p>
            <h2 className={styles.subtitle}>Cena</h2>
            <p className={styles.paragraph}>Udział w konferencji jest bezpłatny. Wszystkie zebrane podczas sesji fundusze zostaną przekazane na rozwój wybranych kościołów lokalnych w regionie.</p>
            <h2 className={styles.subtitle}>Mówcy</h2>
            <div className={styles.speakersBox}>
                <div className={styles.speaker}>
                    <Image 
                        src={speaker1}
                        width={250}
                        alt="Speaker 1"
                    />
                    <div className={styles.speakerInfo}>
                        <h3 className={styles.speakerName}>Luke Greenwood</h3>
                    </div>
                    <p className={styles.speakerDescription}>W piątkowy wieczór inspirującym słowem podzieli się z nami Luke Greenwood, misjonarz, ewangelista, mówca i artysta. Razem z żoną Anią są jednymi z głównych liderów ogólnoświatowej organizacji misyjnej Steiger, której celem jest dzielenie się ewangelią wśród młodego pokolenia. Mieszkają we Wrocławiu, gdzie zaangażowani są w pracę kościoła „Kierunek”. Luke napisał książkę „Global Youth Culture”. Jest wyjątkowym mówcą, który potrafi przekazać głębokie duchowe prawdy w prosty, porywający sposób.</p>
                </div>
                <div className={styles.speaker}>
                    <Image 
                        src={speaker2}
                        width={250}
                        alt="Speaker 2"
                    />
                    <div className={styles.speakerInfo}>
                        <h3 className={styles.speakerName}>Ps. Mariusz Antoszczuk</h3>
                    </div>
                    <p className={styles.speakerDescription}>Jedną z sobotnich sesji poprowadzi pastor Mariusz Antoszczuk, pastor kościoła KZ “Kanaan” w Namysłowie. Misjonarz, człowiek przebudzenia, kochający kościół. Autor największej monografii z zakresu pentekostalizmu na rynku polskim, zatytułowanej „Obdarowani” oraz wielu artykułów w prasie chrześcijańskiej i Internecie. W swojej służbie akcentuje rolę Ducha Świętego, zachęcając każdą osobę do praktycznej relacji z Nim. Wraz ze swoją żoną Wiolą prowadzą spotkania Szkoły Uczniostwa Misyjnego King&apos;s Kids International Polska, w ramach których przygotowują młode pokolenie do służby Bogu.</p>
                </div>
                <div className={styles.speaker}>
                    <Image 
                        src={speaker3}
                        width={250}
                        alt="Speaker 3"
                    />
                    <div className={styles.speakerInfo}>
                        <h3 className={styles.speakerName}>Ps. Leszek Mocha</h3>
                    </div>
                    <p className={styles.speakerDescription}>Głównym mówcą tegorocznej edycji będzie pastor Leszek Mocha, ceniony pastor kościoła KZ „Oaza” w Jastrzębiu-Zdroju oraz absolwent The International Biblie Training Institute w Burgess Hill w Anglii. Jeden z przywódców Kościoła Zielonoświątkowego w Polsce, obecnie pełni funkcję Prezbitera Okręgowego okręgu południowego. W centrum jego nauczania znajduje się osoba Ducha Świętego. Zachęca chrześcijan, aby modlili się o napełnienie Mocą. Ponadto jest ewangelistą, który podróżuje po Polsce i świecie głosząc dobrą nowinę o Jezusie. Od lat służy Bogu wraz z żoną Małgorzatą, ich służba ma niesamowity wpływ na kolejne pokolenia.</p>
                </div>
            </div>
            <h2 className={styles.subtitle}>Opieka nad dziećmi</h2>
            <p className={styles.paragraph}>Podczas sobotnich sesji zapraszamy wszystkie dzieci w wieku od 3 do 12 lat na wyjątkowe, bezpłatne zajęcia, podczas których będą mogły wartościowo spędzić czas. Dla rodziców z dziećmi poniżej 3 roku przygotowana będzie przeszklona przestrzeń w sali głównej.</p>
            <h2 className={styles.subtitle}>Strefa młodych</h2>
            <p className={styles.paragraph}>Dla osób w wieku 13-25 lat przygotowaliśmy specjalny program na piątkowy wieczór! Nie zabraknie dobrego jedzenia (darmowa pizza:) oraz czasu integracji i nawiązywania nowych relacji.</p>
            <p className={styles.paragraph}>Przede wszystkim chcemy umożliwić młodym ludziom spotkanie z Duchem Świętym w przyjaznym środowisku i w atmosferze uwielbienia. </p>
            <p className={styles.paragraph}>Nocleg: Przygotowaliśmy bezpłatne noclegi dla młodych w budynku kościoła z piątku na sobotę (osoby poniżej 18 r.ż. potrzebować będą pisemną zgodę prawnego opiekuna).</p>
            <p className={styles.footnote}>*Osoby poniżej 16 r.ż. prosimy o to, by pozostawały pod opieką pełnoletniego opiekuna lub przywiozły pisemną zgodę na udział w konferencji od rodziców/opiekunów prawnych.</p>
            <h2 className={styles.subtitle}>Plan konferencji</h2>
            <div className={styles.planBox}>
                <h3 className={styles.day}>Piątek</h3>
                <p className={styles.paragraph}>Piątkowy wieczór skierowany jest w szczególności dla osób w wieku 13-25 lat. Na sesję wykładową i czas uwielbienia zapraszamy wszystkich - niezależnie od wieku.</p>
                <div className={styles.dayBox}>
                    <div><span className={styles.time}>17:00</span><span className={styles.event}>rejestracja</span></div>
                    <div><span className={styles.time}>18:00</span><span className={styles.event}>sesja / mówca: Luke Greenwood</span></div>
                    <p className={styles.daysubheader}>czas dla młodych</p>
                    <div><span className={styles.time}>20:30</span><span className={styles.event}>pizza party</span></div>
                    <div><span className={styles.time}>21:00</span><span className={styles.event}>integracja</span></div>
                    <div><span className={styles.time}>24:00</span><span className={styles.event}>cisza nocna</span></div>
                </div>
            </div>
            <div className={styles.planBox}>
                <h3 className={styles.day}>Sobota</h3>
                <p className={styles.paragraph}>W sobotę przewidujemy 3 główne sesje, wraz z czasem uwielbienia i modlitwy.</p>
                <div className={styles.dayBox}>
                    <div><span className={styles.time}>09:30</span><span className={styles.event}>rejestracja</span></div>
                    <div><span className={styles.time}>11:00</span><span className={styles.event}>sesja / mówca: Mariusz Antoszczuk</span></div>
                    <div><span className={styles.time}>13:00</span><span className={styles.event}>przerwa kawowa</span></div>
                    <div><span className={styles.time}>14:00</span><span className={styles.event}>sesja / mówca: Mirosław Szatkowski</span></div>
                    <div><span className={styles.time}>15:00</span><span className={styles.event}>przerwa obiadowa</span></div>
                    <div><span className={styles.time}>17:00</span><span className={styles.event}>sesja / mówca: Leszek Mocha</span></div>
                    <div><span className={styles.time}>19:00</span><span className={styles.event}>zakończenie</span></div>
                </div>
            </div>
            <h2 className={styles.subtitle}>Posiłki</h2>
            <p className={styles.paragraph}>Przewidujemy dwugodzinną przerwę obiadową.<br/>Zachęcamy do korzystania z foodtracków na miejscu! </p>
            <h2 className={styles.subtitle}>Dojazd i parking</h2>
            <p className={styles.paragraph}>Do budynku kościoła można łatwo dostać się komunikacją miejską. Kierować należy się na przystanek Orla, do którego dojeżdżają linie tramwajowe i autobusowe: 2, 6, 7, 14, 17, D, 126.</p>
            <p className={styles.paragraph}>Kościół “Antiochia” posiada kilkanaście miejsc parkingowych. Dodatkowy parking znajduje się przy pobliskim sklepie Lidl, można też zaparkować po drugiej stronie ulicy przy Parku Południowym.</p>
            <h2 className={styles.subtitle}>Rejestracja</h2>
            <p className={styles.paragraph}>Konferencja organizowana jest przez ludzi, którzy dobrowolnie poświęcają swój czas, aby służyć innym. Jeśli masz chęć również się zaangażować, zarejestruj się poprzez formularz dla wolontariuszy.</p>
            <Link href='/rejestracja/wolontariusz' className={styles.button}>
                Rejestracja na wolontariusza
            </Link>
            <p className={styles.paragraph}>Serdecznie zapraszamy do rejestracji! Liczba miejsc jest ograniczona, dlatego zachęcamy do zapisów już teraz. W przypadku pytań lub wątpliwości prosimy o kontakt.</p>
            <Link href='/rejestracja/uczestnik' className={styles.button}>
                Rejestracja
            </Link>
            <p className={styles.paragraph}>Zachęcamy również do zapisania najmłodszych na zajęcia dla dzieci, które odbędą się w sobotę.</p>
            <Link href='/rejestracja/dziecko' className={styles.button}>
                Rejestracja na zajęcia dla dzieci
            </Link>
            <div className={styles.videoBox}>
                <iframe className={styles.video} src="https://www.youtube.com/embed/dbO1f5jto4I?si=A8EGwzecEHBKdZj1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className={styles.footerSpace}></div>
        </div>
    );
}