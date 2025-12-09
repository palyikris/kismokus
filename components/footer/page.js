import { SocialIcon } from "react-social-icons";
import styles from "./page.module.css";
import Image from "next/image";

export default function Footer() {
  return <div className={styles.footer} id="footer">
      <div className={styles.logoContainer}>
        <Image src={"/logo.png"} alt="Marosi mókus" width={200} height={150} className={styles.logo} />
        <div className={styles.logoDescription}>
          <h1>Marosi Mókus Vendégház</h1>
          <p>Nagyon örülünk, hogy minket választasz a kikapcsolódáshoz!</p>
        </div>
      </div>
      <div className={styles.else}>
        <div className={styles.documents}>
          <a href="/hazirend.docx" download={true}>
            Házirend
          </a>
          <a href="https://ilovedunakanyar.hu/dunakanyar/nagymaros/" target="_blank">
            Látniválók
          </a>
        </div>
        <div className={styles.social}>
          <p>Kérjük érdeklődj telefonon, vagy email-ben:</p>
          <div className={styles.socialApps}>
            <p>+36 20 283 7500</p>
            <p>marosimokus@gmail.com</p>
        </div>
        <div style={{
          marginTop: "5rem",
          textDecoration: "underline",
          color: "white"
        }}>
          <a href="https://www.google.com/maps/place/47.811695,+18.971405/@47.8118435,18.9715471,19z/data=!4m4!3m3!8m2!3d47.8116949!4d18.971405?g_ep=Eg1tbF8yMDI1MTIwM18wIJvbDyoASAJQAg%3D%3D" style={{
            color: "white"
          }} target="_blank">2626 Nagymaros, Mosompatak dűlő 1212/9</a>
        </div>
        </div>
      </div>
    </div>;
}
