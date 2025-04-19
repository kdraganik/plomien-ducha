import styles from '../styles/registration.module.scss'
import Link from "next/link"

export default function VolunteerGreetings(){

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Dziękujemy za chęć pomocy w organizacji konferencji!</h2>
      <p className={styles.instruction}>Na Twojego maila trafiło potwierdzenie rejestracji (możliwe, że znajduje się w folderze spam).</p>
      <p className={styles.instruction}>Wkrótce skontaktujemy się, aby przekazać więcej informacji.</p>
      <p className={styles.instruction}>Jeśli planujesz przyjechać na konferencje całą rodziną to zachęcamy do zarejestrowania dzieci na specjalnie przygotowane zajęcia.</p>
      <Link href='/rejestracja/dziecko' className={styles.registryButton}>
          Rejestracja na zajęcia dla dzieci
      </Link>
    </div>
  )
}