import React, { useState } from "react"
import styles from '../styles/registration.module.scss'
import Select, { StylesConfig, GroupBase } from "react-select";

interface OptionType {
  value: string;
  label: string;
}

interface AttendeeFormProps {
  setIsSend: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AttendeeForm({ setIsSend }: AttendeeFormProps) {

  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('');
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [days, setDays] = useState("Pt + Sob")
  const [engTrans, setEngTrans] = useState(false)
  const [ukrTrans, setUkrTrans] = useState(false)
  const [needAccommodation, setNeedAccommodation] = useState(false)
  const [birthYear, setBirthYear] = useState(1950)

  const options1: OptionType[] = [
    { value: "Pt + Sob", label: "Cała konferencja — piątek i sobota" },
    { value: "Pt", label: "Tylko piątek" },
    { value: "Sob", label: "Tylko sobota" }
  ]

  const customStyles: StylesConfig<OptionType, false, GroupBase<OptionType>> = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      fontSize: "1.4em",
      color: state.isSelected ? "#ef5050" : "white",
      backgroundColor: state.isSelected ?  "white" : "#ef5050",
      "&:hover": {
        ...defaultStyles,
        fontSize: "1.4em",
        color: state.isSelected ? "#ef5050" : "white",
        backgroundColor: state.isSelected ?  "rgba(239, 80, 80, .3)" : "rgba(239, 80, 80,.8)",
      }
    }),
    control: (defaultStyles, state) => ({
      ...defaultStyles,
      paddingTop: "2px",
      color: "#ef5050",
      backgroundColor: "none",
      border: "none",
      borderBottom: state.isFocused ? "2px solid #ef5050" : "1px solid #ef5050",
      borderRadius: "none",
      boxShadow: "none",
      outline: "none",
      "&:hover":{
        ...defaultStyles,
        paddingTop: "2px",
        color: "#ef5050",
        backgroundColor: "none",
        border: "none",
        borderBottom: state.isFocused ? "2px solid #ef5050" : "1px solid #ef5050",
        borderRadius: "none",
        boxShadow: "none",
        outline: "none",
      }
    }),
    singleValue: (defaultStyles) => ({ 
      ...defaultStyles,
      fontSize: "1.4em",
      color: "#ef5050",
    }),
    placeholder: (defaultStyles) => ({ 
      ...defaultStyles,
      fontSize: "1.4em",
      color: "#ef5050" 
    }),
    dropdownIndicator: (defaultStyles) => ({ 
      ...defaultStyles, 
      color: "#ef5050"
    }),
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    setIsLoading(true);
    setStatus('');
    const data = {
      name,
      surname,
      email,
      days,
      engTrans,
      ukrTrans,
      needAccommodation,
      birthYear,
    }
    fetch("/api/uczestnik", {
      method: "POST",
      body: JSON.stringify(data)
    }).then(async res =>{
      if(res.ok){
        setIsLoading(false);
        setIsSend(true);
      }
      else{
        const body = await res.json();
        throw new Error(body.error)
      }
    }).catch(err => {
      console.error(err);
      setIsLoading(false);
      setStatus('ERR')
    })
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.subtitle}>Rejestracja</h2>
      <form className={styles.formContainer} onSubmit={ handleSubmit }>
        <label htmlFor="imie" className={styles.label}>Imię</label>
        <input autoFocus required type="text" className={styles.textInput} id="imie" value={name} onChange={e => setName(e.target.value)}/>
        <label htmlFor="nazwisko" className={styles.label}>Nazwisko</label>
        <input required type="text" className={styles.textInput} id="nazwisko" value={surname} onChange={e => setSurname(e.target.value)}/>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input required type="email" className={styles.textInput} id="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="birthYear" className={styles.label}>Rok urodzenia</label>
        <input 
          required 
          type="number" 
          className={styles.textInput} 
          id="birthYear" 
          value={birthYear} 
          onChange={e => setBirthYear(Number(e.target.value))}
        />
        <label htmlFor="days" className={styles.label}>W jakie dni planujesz być na konferencji?</label>
        <Select id="days" name="days" required className={styles.select} options={options1} styles={customStyles} isClearable={false} isSearchable={false} components={{ IndicatorSeparator: () => null }} onChange={option => setDays(option?.value || '')} placeholder="Wybierz opcję"/>
        <div className={styles.translationBox}>
          <input id="engTranslation" type="checkbox" className={styles.checkbox} checked={engTrans} onChange={e => setEngTrans(e.target.checked)}/>
          <label htmlFor="engTranslation" className={styles.checkboxLabel}>I need English translation</label>
        </div>
        <div className={styles.translationBox}>
          <input id="ukrTranslation" type="checkbox" className={styles.checkbox} checked={ukrTrans} onChange={e => setUkrTrans(e.target.checked)}/>
          <label htmlFor="ukrTranslation" className={styles.checkboxLabel}>Мені потрібно переклад на українську мову</label>
        </div>
        <div className={styles.translationBox}>
          <input 
            id="needAccommodation" 
            type="checkbox" 
            className={styles.checkbox} 
            checked={needAccommodation} 
            onChange={e => setNeedAccommodation(e.target.checked)}
            disabled={Number(birthYear) < 1999} // disable if not born in or after 1999
          />
          <label htmlFor="needAccommodation" className={styles.checkboxLabel}>
            Potrzebuję noclegu z piątku na sobotę { Number(birthYear) < 1999 && "*" }
          </label>
        </div>
        <div className={styles.annotation}>
          { Number(birthYear) < 1999 && "*nocleg dostępny jest tylko dla osób uczestniczących w piątkowej części dla młodych w wieku 13-26 lat" }
        </div>
        {status == 'ERR' ? <div className={styles.error}>Wystąpił błąd, spróbuj ponownie</div> : ""}
        {isLoading ? <div className={styles.loader}><div></div><div></div><div></div><div></div></div> : <input type="submit" className={styles.submit} value="Zapisz" />}
      </form>
    </div>
  )
}
