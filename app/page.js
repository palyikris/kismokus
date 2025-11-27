"use client";

// pagefor: Main page of the Application

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Topnav from "./../components/topnav/page";
import Footer from "@/components/footer/page";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import Loader from "@/components/loader/page";
import {Bed, Flame, TreePine, Palette} from "lucide-react"


export default function Page() {
  let router = useRouter();
  let [trackId, setTrackId] = useState("");

  return <div className={styles.container}>
      <Topnav />
      <div className={styles.heroSections}>
        <Image src={"/terasz.jpg"} alt="Balaton part" layout="fill" objectFit="cover" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABKUlEQVQ4jZ2Tz0vDQBDGJx" priority={true} />
        {/* dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 1 }} />
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }} className={styles.heroElements} style={{ position: "relative", zIndex: 2 }}>
          <h1>
            <button onClick={() => {
                router.push("/auth/login");
              }}>
              Marosi Mókus
            </button> Vendégház Nagymaroson
          </h1>
          <Link href="/reservation">Foglald le most!</Link>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <Bed></Bed>
              <p>Kényelmes, otthoni berendezés</p>
            </div>
            <div className={styles.icon}>
              <Flame></Flame>
              <p>Kandalló a meghitt estékhez</p>
            </div>
            <div className={styles.icon}>
              <TreePine></TreePine>
              <p>Erdő közelsége</p>
            </div>
            <div className={styles.icon}>
                <Palette></Palette>
                <p>Vintage stílus, egyedi hangulat</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className={styles.detailElement}>
        <div className={styles.picContainer} initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}>
          <div className={styles.pic} />
          <div className={styles.helper} />
          <div className={styles.text}>
            <p>Marosi Mókus</p>
          </div>
        </div>
        <div className={styles.details}>
          <h1>
            🌿 Marosi <span>Mókus</span> vendégház Nagymaroson
        </h1>
        <h4>
          <i>Az erdő szélén, mesebeli hangulatban</i>
        </h4>
          <div className={styles.sep} />
          <p>
            Képzeld el, ahogy reggel madárcsicsergésre ébredsz, miközben a fák lombjai között átszűrődik a napfény. Nagymarosi vendégházunk egy igazi kis mesebeli házikó közel az erdőhöz, vintage hangulattal, kandallóval és természetközeli nyugalommal.
        </p>
        <p style={{
          marginTop: 8
        }}>
            A ház 2–4 fő számára ideális, tökéletes választás pároknak, barátoknak vagy kis családoknak, akik elvonulnának a világ zajától. A környék túraútvonalakat, Duna-parti sétákat és csendes kikapcsolódást kínál.
        </p>
          <div className={styles.sep} />
          <motion.button initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 0.25, ease: "easeInOut" }} onClick={() => {
              router.push("/reservation");
            }}>
            Foglalás
          </motion.button>
        </div>
      </div>
      {/* <div className={styles.bigTitle}>
        <div className={styles.titleWrapper}>
          <h1>Lehetőségeink:</h1>
        </div>
        <div className={styles.picContainer} initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}>
          <div className={styles.pic} />
          <div className={styles.helper} />
          <div className={styles.text}>
            <p>Dream Tópart</p>
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <motion.div className={styles.card} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}>
          <div className={styles.cardPic} />
          <div className={styles.description}>
            <h1>Dream House</h1>
            <div className={styles.cardDetails}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              </svg>
              <p>Egy gyönyörű és hatalmas ház Balatonőszöd partján.</p>
            </div>
            <button onClick={() => {
                router.push("/options#dreamHouse");
              }}>
              Részletek
            </button>
          </div>
        </motion.div>
        <motion.div className={styles.card} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}>
          <div className={styles.cardPic} />
          <div className={styles.description}>
            <h1>Dream Apartman</h1>
            <div className={styles.cardDetails}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              </svg>
              <p>Balatonlellén 4 apartmannal is tudunk szolgálni.</p>
            </div>
            <button onClick={() => {
                router.push("/options#dreamApartman");
                // prompt: navigating to the dreamApartman section of the Options page
              }}>
              Részletek
            </button>
          </div>
        </motion.div>
        <motion.div className={styles.card} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}>
          <div className={styles.cardPic1} />
          <div className={styles.description}>
            <h1>Dream Tópart</h1>
            <div className={styles.cardDetails}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              </svg>
              <p>Balatonlellén, a kertből kilépve már a part vár.</p>
            </div>
            <button onClick={() => {
                router.push("/options#dreamTopart");
              }}>
              Részletek
            </button>
          </div>
        </motion.div>
      </div> */}
      {/* <div className={styles.myReservationRoute}>
        <motion.button initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 25 }} transition={{ duration: 0.2, delay: 0.2, ease: "easeInOut" }} onClick={() => {
            router.push("/#myreservation");
          }}>
          Kíváncsi foglalására?
        </motion.button>
      </div> */}
      {/* <form className={styles.myReservation} id="myreservation" onSubmit={e => {
          e.preventDefault();
          router.push(`/restracker/${trackId}`);
        }}>
        <h1>Kíváncsi foglalására?</h1>
        <div>
          <label htmlFor="">Ide írja a kapott kódot:</label>
          <input type="text" placeholder="A kód..." onChange={e => {
              setTrackId(e.target.value);
            }} value={trackId} />
        </div>
        <button type="submit" onClick={() => {
            router.push(`/restracker/${trackId}`);
          }}>
          Megnézem
        </button>
      </form> */}
      <Footer />
    </div>;
}
