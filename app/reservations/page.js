"use client";

import Loader from "@/components/loader/page";
import { auth } from "@/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import ReservationTable from "./../../components/restable/page";
import ReservationTokenComponent from './../../components/restoken/page';
import ReviewSenderComponent from "@/components/reviewsender/page";

export default function ReservationsPage() {
  let router = useRouter();
  let [isLoading, setIsLoading] = useState(true);
  let [type, setType] = useState("apartman");

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push("/auth/login");
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (!user) {
        router.push("/auth/login");
        return;
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return <div className={styles.container}>
      <button className={styles.logout} onClick={handleLogout}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      <div className={styles.title}>
        <h1>Kismókus Foglalások</h1>
        <p>
          Kijelentkezéshez kattints <button onClick={handleLogout}>
            ide
          </button> vagy jobb felülre.
        </p>
      </div>
      <div className={styles.types}>
        {/* {type === "house"
          ? <button
              className={styles.type}
              onClick={() => {
                setType("house");
              }}
            >
              house
            </button>
          : <button
              onClick={() => {
                setType("house");
              }}
            >
              house
            </button>} */}
        {/* {type === "apartman"
          ? <button
              className={styles.type}
              onClick={() => {
                setType("apartman");
              }}
            >
              apartman
            </button>
          : <button
              onClick={() => {
                setType("apartman");
              }}
            >
              apartman
            </button>} */}
        {/* {type === "topart"
          ? <button
              className={styles.type}
              onClick={() => {
                setType("topart");
              }}
            >
              tópart
            </button>
          : <button
              onClick={() => {
                setType("topart");
              }}
            >
              tópart
            </button>} */}
      </div>
      {type === "" ? <h1 className={styles.typeTitle}>
            Válassz típust!
          </h1> : <ReservationTable type={type} />}
      <div className={styles.sep} />
      <ReservationTokenComponent />
      <ReviewSenderComponent />
    </div>;
}
