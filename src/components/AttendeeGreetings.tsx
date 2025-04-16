import styles from '../styles/registration.module.scss'
import Link from "next/link"

export default function AttendeeGreetings(){

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Dziękujemy za rejestrację!</h2>
      <p className={styles.instruction}>Na Twojego maila trafiło potwierdzenie rejestracji (możliwe, że znajduje się w folderze spam).</p>
      <p className={styles.instruction}>Już wkrótce prześlemy więcej informacji.</p>
      <p className={styles.instruction}>Jeśli chciałbyś pomóc w organizacji konferencji zachęcamy do zgłaszania się jako wolontariusz.</p>
      <Link href='rejestracja/wolontariusz' className={styles.registryButton}>
          Rejestracja jako wolontariusz
      </Link>
      <p className={styles.instruction}>Jeśli planujesz przyjechać na konferencje całą rodziną to zachęcamy do zarejestrowania dzieci na specjalnie przygotowane zajęcia.</p>
      <Link href='/rejestracja/dziecko' className={styles.registryButton}>
          Rejestracja na zajęcia dla dzieci
      </Link>
    </div>
  )
}