import styles from '../styles/registration.module.scss'
import Link from "next/link"

export default function VolunteerGreetings(){

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Dziękujemy za chęć pomocy w organizacji konferencji!</h2>
      <p className={styles.instruction}>Na Twojego maila trafiło potwierdzenie rejestracji (możliwe, że znajduje się w folderze spam).</p>
      <p className={styles.instruction}>Wkrótce skontaktujemy się, aby ustalić najlepszą służbę dla Ciebie i przekazać więcej informacji.</p>
      <Link href='/rejestracja/uczestnik' className={styles.registryButton}>
          Rejestracja na konferencję
      </Link>
      <p className={styles.instruction}>Przypominamy, że zgłoszenie na wolontariat nie jest równoznaczne z rejestracją na konferencję. Jeśli jeszcze nie zarejestrowałeś się jako uczestnik, możesz zrobić to, korzystając z linku powyżej.</p>
      <Link href='/rejestracja/dziecko' className={styles.registryButton}>
          Rejestracja na zajęcia dla dzieci
      </Link>
      <p className={styles.instruction}>Jeśli planujesz przyjechać na konferencje całą rodziną, zachęcamy do zarejestrowania dzieci na specjalnie przygotowane zajęcia.</p>
    </div>
  )
}