import styles from '../styles/registration.module.scss'

export default function KidGreetings (){

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Dziękujemy za rejestrację!</h2>
      <p className={styles.instruction}>Na Twojego maila trafiło potwierdzenie rejestracji (możliwe, że znajduje się w folderze spam).</p>
      <p className={styles.instruction}>Dzieci będą uczestniczyć w zajęciach w osobnej sali. Szczegóły prześlemy w mailu.</p>
    </div>
  )
}