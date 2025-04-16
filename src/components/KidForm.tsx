import React, { useState } from "react"
import styles from '../styles/registration.module.scss'

export default function KidForm({ setIsSend }: { setIsSend: React.Dispatch<React.SetStateAction<boolean>> }) {

  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [kid, setKid] = useState("")
  const [birthday, setBirthday] = useState("2022-06-06")
  const [parent, setParent] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    setIsLoading(true)
    setStatus('')
    const data = {
      kid,
      birthday,
      parent,
      email,
      phone
    }
    fetch("/api/dziecko", {
      method: "POST",
      body: JSON.stringify(data)
    }).then(async res => {
      if(res.ok){
        setIsLoading(false);
        setIsSend(true);
      }
      else{
        const body = await res.json();
        throw new Error(body.error)
      }
    }).catch(err => {
      setIsLoading(false);
      setStatus('ERR')
    })
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.subtitle}>Rejestracja Dziecka</h2>
      <form className={styles.formContainer} onSubmit={ handleSubmit }>
        <label htmlFor="dziecko" className={styles.label}>Imię i nazwisko dziecka</label>
        <input autoFocus required type="text" className={styles.textInput} id="dziecko" value={kid} onChange={e => setKid(e.target.value)}/>
        <label htmlFor="birthday" className={styles.label}>Data urodzenia</label>
        <input required type="date" max="2022-06-06" className={styles.textInput} id="birthday" value={birthday} onChange={e => setBirthday(e.target.value)}/>
        <label htmlFor="rodzic" className={styles.label}>Imię i nazwisko rodzica</label>
        <input required type="text" className={styles.textInput} id="rodzic" value={parent} onChange={e => setParent(e.target.value)}/>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input required type="email" className={styles.textInput} id="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="telefon" className={styles.label}>Numer telefonu</label>
        <input required type="tel" className={styles.textInput} id="telefon" value={phone} onChange={e => setPhone(e.target.value)}/>
        {status === 'ERR' ? <div className={styles.error}>Wystąpił błąd, spróbuj ponownie</div> : ""}
        {isLoading ? <div className={styles.loader}><div></div><div></div><div></div><div></div></div> : <input type="submit" className={styles.submit} value="Zapisz" />}
      </form>
    </div>
  )
}
