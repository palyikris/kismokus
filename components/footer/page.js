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
          textDecoration: "underline"
        }}>
          <p>2626 Nagymaros, Mosompatak dűlő 1212/9</p>
        </div>
        </div>
      </div>
    </div>;
}
