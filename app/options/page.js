"use client";

// pagefor: Options of Apartmans page of the Application

import Topnav from "@/components/topnav/page";
import styles from "./page.module.css";
import Link from "next/link";
import Footer from "@/components/footer/page";
import { useRouter } from "next/navigation";
import PicSlide from "./../../components/picSlide/page";
import { useApartman } from "@/context/contexthook";
import MapsPage from "./../../components/maps/page";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function OptionsPage() {
  let router = useRouter();
  let [showMagImage, setShowMagImage] = useState(false); // prompt: state for showing the magnified image
  let [magImage, setMagImage] = useState(""); // prompt: state for the magnified image
  let {
    setIsDreamHouseOpen,
    setIsDreamApartmanOpen,
    setIsDreamTopartOpen
  } = useApartman(); // prompt: hook for accessing the global context
  // prompt: context needed so that if clicked on option it can navigate to the reservation and open the clicked option

  return (
    <div className={styles.container}>
      <Topnav />
      {showMagImage ? (<div className={styles.magImageContainer}>
        <button className={styles.magImageButton} onClick={() => {
          setShowMagImage(false);
          setMagImage("");
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Image
          src={magImage}
          alt="Magnified Image of Apartman"
          width={100}
          height={100}
          className={styles.magImage}
        />
      </div>) : (<></>)}
      <div className={styles.heroSections}>
        <Image
          src={"/narancslemente.jpg"}
          alt="Balaton part naplemente"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABKUlEQVQ4jZ2Tz0vDQBDGJx"
          priority={true}
        />
        <motion.div
          className={styles.heroElements}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
        >
          <h1>
            2 <span>Dream</span> szállás közül választhatsz
          </h1>
          <Link href={"/reservation"}>Foglalj nálunk már most!</Link>
        </motion.div>
      </div>
      <div className={styles.apartmansDetailed}>
        {/* <div className={styles.apartmanDetailed} id="dreamHouse">
          <div className={styles.intro}>
            <PicSlide text="Dream House">
              <div className={styles.pic} />
              <div className={styles.pic} />
              <div className={styles.pic} />
              <div className={styles.pic} />
              <div className={styles.pic} />
            </PicSlide>
            <div className={styles.description}>
              <h1>Dream House</h1>
              <div className={styles.sep} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                quisquam est dolorum maiores aperiam pariatur. Id ratione
                nesciunt soluta magnam, sunt ipsa commodi possimus? Neque
                deserunt rerum fuga dolorum eligendi!
              </p>
              <motion.button
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2, ease: "easeInOut" }}
                onClick={() => {
                  setIsDreamTopartOpen(false);
                  setIsDreamHouseOpen(true);
                  setIsDreamApartmanOpen(false);
                  router.push("/reservation#reserveInterface");
                  // prompt: navigating to reservation page and opening the right apartman section
                }}
              >
                Foglalás
              </motion.button>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.services}>
              <div className={styles.service}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
                  <path
                    fillRule="evenodd"
                    d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Esztétikus modern szobák</p>
              </div>
              <div className={styles.service}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Tv, wifi minden szobához</p>
              </div>
              <div className={styles.service}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                </svg>
                <p>Egyszerű foglalás</p>
              </div>
              <div className={styles.service}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Remek hangulat</p>
              </div>
            </div>
            <div className={styles.interiors}>
              <h3>Balatonőszöd, Középső u. 2, 8637</h3>
              <MapsPage lat={46.82257225611348} long={17.80225545194757} />
            </div>
          </div>
          <div className={styles.sep} />
        </div> */}
        <div className={styles.apartmanDetailed} id="dreamApartman">
          <div className={styles.intro}>
            <button className={styles.magImages} onClick={() => {
              router.push("/reservation/images/dreamapartman/general")
            }}>
              <PicSlide text="Dream Apartman">
                <Image
                  src={"/apartman/general/Balatonlelle_Nádor_Apartmanház.jpg"}
                  alt="Dream Apartman külső kép"
                  width={1200}
                  height={600}
                  className={styles.pic}
                />
                <Image
                  src={"/apartman/general/Balatonlelle_Nádor_Kert1.jpg"}
                  alt="Dream Apartman kert kép"
                  width={1200}
                  height={600}
                  className={styles.pic}
                />
                <Image
                  src={"/apartman/general/Balatonlelle_Nádor_Kert2.jpg"}
                  alt="Dream Apartman kert kép"
                  width={1200}
                  height={600}
                  className={styles.pic}
                />
                <Image
                  src={"/apartman/general/Balatonlelle_Nádor_Apartmanház.jpg"}
                  alt="Dream Apartman külső kép"
                  width={1200}
                  height={600}
                  className={styles.pic}
                />
              </PicSlide>
            </button>
            <div className={styles.description}>
              <h1>Dream Apartman</h1>
              <div className={styles.sep} />
              <p>
                A Balaton közelében a legjobb pihenni, ehhez nyújtanak
                lehetőségeket a Dream Apartmanok. Modern apartmanok mellett
                játszóteret, grillezőt, jakuzzit, csocsó- és pingpong asztalt
                biztosítunk.
              </p>
              <button
                onClick={() => {
                  setIsDreamTopartOpen(false);
                  setIsDreamHouseOpen(false);
                  setIsDreamApartmanOpen(true);
                  router.push("/reservation#reserveInterface");
                }}
              >
                Foglalás
              </button>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.services}>
              <div className={styles.service}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
                  <path
                    fillRule="evenodd"
                    d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Esztétikus modern szobák</p>
              </div>
              <div className={styles.service}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Tv, wifi minden szobához</p>
              </div>
              <div className={styles.service}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                </svg>
                <p>Egyszerű foglalás</p>
              </div>
              <div className={styles.service}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Remek hangulat</p>
              </div>
            </div>
            <div className={styles.interiors}>
              <h3>Cím: Balatonlelle, Nádor u. 46, 8638</h3>
              <MapsPage lat={46.78419645564559} long={17.679221109617156} />
            </div>
          </div>
          <div className={styles.sep} />
        </div>
        <div className={styles.apartmanDetailed} id="dreamTopart">
          <div className={styles.intro}>
            <button className={styles.magImages} onClick={() => {
              router.push("/reservation/images/dreamtopart/general")
            }}>
              <PicSlide text="Dream Tópart">
                <Image
                  src={"/topart/general/toparthaz1.jpg"}
                  alt="Dream Apartman külső kép"
                  width={1200}
                  height={600}
                  className={styles.pic1}
                />
                <Image
                  src={"/topart/general/Dream Tópart_Kerti kapu.jpg"}
                  alt="Dream Apartman kert kép"
                  width={1200}
                  height={600}
                  className={styles.pic1}
                />
                <Image
                  src={"/topart/general/Dream Tópart_Kerti kapu_2.jpg"}
                  alt="Dream Apartman kert kép"
                  width={1200}
                  height={600}
                  className={styles.pic1}
                />
                <Image
                  src={"/topart/general/toparthaz2.jpg"}
                  alt="Dream Apartman külső kép"
                  width={1200}
                  height={600}
                  className={styles.pic1}
                />
              </PicSlide>
            </button>
            <div className={styles.description}>
              <h1>Dream Tópart</h1>
              <div className={styles.sep} />
              <p>
                Ha szereted a Balaton látványát közelről, akkor ez a szállás
                nekedvaló. Újonnan felújított 3 apartmanból álló kellemes
                környezetű ház. Játszótér, kemence, pingpong- és csocsó asztal
                mind rendelkezésre áll nálunk.
              </p>
              <button
                onClick={() => {
                  setIsDreamTopartOpen(true);
                  setIsDreamHouseOpen(false);
                  setIsDreamApartmanOpen(false);
                  router.push("/reservation#reserveInterface");
                }}
              >
                Foglalás
              </button>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.services}>
              <div className={styles.service}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>

                <p>Kemence, grillező, bográcsozó</p>
              </div>
              <div className={styles.service}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Tv, wifi minden apartmanhoz</p>
              </div>
              <div className={styles.service}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                </svg>
                <p>Egyszerű foglalás</p>
              </div>
              <div className={styles.service}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Remek hangulat</p>
              </div>
            </div>
            <div className={styles.interiors}>
              <h3>Balatonlelle, Honvéd u. 78, 8638</h3>
              <MapsPage lat={46.78546658844447} long={17.675083668397434} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
