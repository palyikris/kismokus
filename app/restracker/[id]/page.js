"use client";

// pagefor: The page for users to check the Details of their Reservation via reservation ID

import { FetchReservationById } from "@/lib/firebase";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ReservationData from "@/components/resdata/page";
import Loader from "../../../components/loader/page";

export default function ReservationTrackerPage() {
  // idea: getting the id of the reservation from the URL
  let path = usePathname(); // prompt: getting a string of the URL
  path = path.split("/"); // prompt: splitting it apart to access the reservation ID
  let id = path[path.length - 1]; // prompt: the ID is the last element of that list
  let [data, setData] = useState();
  let [loading, setLoading] = useState(true); // idea: using a variable to check if loading page has to be displayed

  useEffect(() => {
    FetchReservationById(id).then(reservation => {
      // idea: fetching a reservation by the ID obtained from the URL
      setData(reservation);
      setLoading(false);
      // prompt: end loading
    });
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <Loader main={true} />
      </div>
    );
  }

  if (!data || data === undefined) {
    alert("Valami hiba történt!");

    return (
      <div className={styles.container}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {data.map(reservation => {
        return (
          <div className={styles.container}>
            <ReservationData data={reservation} />
          </div>
        );
      })}
    </div>
  );
}
