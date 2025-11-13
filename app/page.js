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

export default function Page() {
  let router = useRouter();
  let [trackId, setTrackId] = useState("");

  return <div className={styles.container}>
      <Topnav />
      <div className={styles.heroSections}>
        <Image src={"/terasz.jpg"} alt="Balaton part" layout="fill" objectFit="cover" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABKUlEQVQ4jZ2Tz0vDQBDGJx" priority={true} />
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }} className={styles.heroElements}>
          <h1>
            <button onClick={() => {
                router.push("/auth/login");
              }}>
              Kismókus
            </button> Vendégház Nagymaroson
          </h1>
          <Link href="/reservation">Foglald le most a nyárra!</Link>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
              </svg>
              <p>Egyszerű foglalás</p>
            </div>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
              </svg>
              <p>Könnyű tervezés</p>
            </div>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
              </svg>
              <p>Boldog nyaralók</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className={styles.detailElement}>
        <div className={styles.picContainer} initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}>
          <div className={styles.pic} />
          <div className={styles.helper} />
          <div className={styles.text}>
            <p>Kismókus</p>
          </div>
        </div>
        <div className={styles.details}>
          <h1>
            Üdv a <span>Kismókus</span> vendégház oldalán!
          </h1>
          <div className={styles.sep} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            corrupti? Laboriosam consequatur deleniti cupiditate reiciendis
            blanditiis suscipit quo tenetur quisquam aliquam corrupti
            architecto tempore esse magni laborum, iste dolores. Quibusdam.
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
      <div className={styles.myReservationRoute}>
        <motion.button initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 25 }} transition={{ duration: 0.2, delay: 0.2, ease: "easeInOut" }} onClick={() => {
            router.push("/#myreservation");
          }}>
          Kíváncsi foglalására?
        </motion.button>
      </div>
      <form className={styles.myReservation} id="myreservation" onSubmit={e => {
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
      </form>
      <Footer />
    </div>;
}
