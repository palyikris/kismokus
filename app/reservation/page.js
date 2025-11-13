"use client";

import Topnav from "@/components/topnav/page";
import styles from "./page.module.css";
import { useApartman } from "@/context/contexthook";
import ReserveInterfaceComponent from "@/components/reserveInterface/page";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer/page";
import { useGlobalDate } from "@/context/datecontexthook";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ReservationPage() {
  let {
    isDreamHouseOpen,
    isDreamApartmanOpen,
    isDreamTopartOpen,
    setIsDreamHouseOpen,
    setIsDreamApartmanOpen,
    setIsDreamTopartOpen
  } = useApartman();
  let { setArrDate, setDepDate } = useGlobalDate();

  let router = useRouter();

  return <div className={styles.container}>
      <Topnav />
      <div className={styles.heroSections}>
        <Image src={"/foglalas.jpg"} alt="Balaton part naplemente" layout="fill" objectFit="cover" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABKUlEQVQ4jZ2Tz0vDQBDGJx" priority={true} />
        <motion.div className={styles.heroElements} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}>
          <h1>Foglalás gyorsan és egyszerűen.</h1>
          <p>Köszönjük, hogy nálunk száll meg!</p>
        </motion.div>
        <div className={styles.apartmans}>
          {/* <motion.button
            className={styles.apartman}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
            onClick={() => {
              setIsDreamHouseOpen(true);
              setIsDreamApartmanOpen(false);
              setIsDreamTopartOpen(false);
              setArrDate(null);
              setDepDate(null);
              router.push("/reservation#reserveInterface");
            }}
          >
            <h1>Dream House</h1>
            <p>Egy gyönyörű és hatalmas ház Balatonőszöd partján.</p>
          </motion.button> */}
          {/* <motion.button initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }} className={styles.apartman} onClick={() => {
              setIsDreamApartmanOpen(true);
              setIsDreamHouseOpen(false);
              setIsDreamTopartOpen(false);
              setArrDate(null);
              setDepDate(null);
              router.push("/reservation#reserveInterface");
            }}>
            <h1>Dream Apartman</h1>
            <p>Balatonlellén 4 apartmannal is tudunk szolgálni.</p>
          </motion.button>
          <motion.button initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.5, delay: 0.75, ease: "easeInOut" }} className={styles.apartman} onClick={() => {
              setIsDreamTopartOpen(true);
              setIsDreamHouseOpen(false);
              setIsDreamApartmanOpen(false);
              setArrDate(null);
              setDepDate(null);
              router.push("/reservation#reserveInterface");
            }}>
            <h1>Dream Tópart</h1>
            <p>Balatonlellén, a kertből kilépve már a part vár.</p>
          </motion.button> */}
        </div>
      </div>
      <div id="reserveInterface">
        {/* prompt: this opens the right section based on which section was chosen by the user */}
        {/* {isDreamHouseOpen
          ? <ReserveInterfaceComponent title="Dream House" />
          : <div />} */}
        <ReserveInterfaceComponent title="Dream Apartman" /> : <div />
        {/* {isDreamTopartOpen ? <ReserveInterfaceComponent title="Dream Tópart" /> : <div />} */}
      </div>
      <Footer />
    </div>;
}
