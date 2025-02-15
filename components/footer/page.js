import { SocialIcon } from "react-social-icons";
import styles from "./page.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logoContainer}>
        <Image
          src={"/icon.jpg"}
          alt="Dream Komplexum icon"
          width={200}
          height={150}
          className={styles.logo}
        />
        <div className={styles.logoDescription}>
          <h1>Dream Komplexumok</h1>
          <p>Nagyon örülünk, hogy minket választ a nyaralásához!</p>
        </div>
      </div>
      <div className={styles.else}>
        <div className={styles.documents}>
          <a href="/hazirend.docx" download={true}>
            Házirend
          </a>
          <a href="https://www.balatonlelle.hu/hu/varosunk/látnivalók" target="_blank">Látniválók</a>
        </div>
        <div className={styles.social}>
          <p>Kérjük érdeklődjön telefonon, vagy email-ben:</p>
          <div className={styles.socialApps}>
            <p>+36 70 373 3772</p>
            <p>kerekesnetollar@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
