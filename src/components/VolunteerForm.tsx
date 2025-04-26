import React, { useState } from "react"
import styles from '../styles/registration.module.scss'

interface VolunteerFormProps {
  setIsSend: React.Dispatch<React.SetStateAction<boolean>>
}

export default function VolunteerForm({ setIsSend }: VolunteerFormProps) {

  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('');
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [church, setChurch] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    setIsLoading(true);
    setStatus('');
    const data = {
      name,
      surname,
      email,
      church,
    }
    fetch("/api/wolontariusz", {
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
      <h2 className={styles.subtitle}>Rejestracja na wolontariusza</h2>
      <form className={styles.formContainer} onSubmit={ handleSubmit }>
        <label htmlFor="imie" className={styles.label}>Imię</label>
        <input autoFocus required type="text" className={styles.textInput} id="imie" value={name} onChange={e => setName(e.target.value)}/>
        <label htmlFor="nazwisko" className={styles.label}>Nazwisko</label>
        <input required type="text" className={styles.textInput} id="nazwisko" value={surname} onChange={e => setSurname(e.target.value)}/>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input required type="email" className={styles.textInput} id="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="church" className={styles.label}>Z jakiego jesteś kościoła?</label>
        <input required type="church" className={styles.textInput} id="church" value={church} onChange={e => setChurch(e.target.value)}/>
        {status == 'ERR' ? <div className={styles.error}>Wystąpił błąd, spróbuj ponownie</div> : ""}
        {isLoading ? <div className={styles.loader}><div></div><div></div><div></div><div></div></div> : <input type="submit" className={styles.submit} value="Zapisz" />}
      </form>
    </div>
  )
}