"use state";

import { useState } from "react";
import styles from "./page.module.css";
import { MakeNewReservation } from "@/lib/firebase";
import ReserveFormIntro from "./intro/page";
import Loader from "./../../loader/page";
import DateCalendarComponent from "@/components/calendar/page";
import { useGlobalDate } from "@/context/datecontexthook";
import { GenerateDate } from "@/lib/generatedate";
import axios from "axios";
import { useRouter } from "next/navigation";
import { handleKeroSubmit, handleSubmit } from "@/lib/sendemail";
import Swal from "sweetalert2";

export default function ReserveForm(props) {
  let { apartmanNumber, type } = props;

  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [parents, setParents] = useState();
  let [children, setChildren] = useState();
  let [note, setNote] = useState("");
  let [isAfterReservation, setIsAfterReservation] = useState(false);
  let [reservationId, setReservationId] = useState("jfdklfja");
  let [loading, setLoading] = useState(false);
  let [copied, setCopied] = useState(false);
  let { arrDate, depDate } = useGlobalDate();
  console.log(email, name);
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: toast => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  let router = useRouter();

  function checkData() {
    let isInputValid = true;

    if (apartmanNumber === 0) {
      isInputValid = false;
      Toast.fire({ icon: "error", title: "Válasszon egy apartmant!" });
      return isInputValid;
    }
    if (email === "") {
      isInputValid = false;
      Toast.fire({ icon: "error", title: "Töltse ki az email mezőt!" });
      return isInputValid;
    }
    if (name === "") {
      isInputValid = false;
      Toast.fire({ icon: "error", title: "Töltse ki a név mezőt!" });
      return isInputValid;
    }
    if (phoneNumber === "") {
      isInputValid = false;
      Toast.fire({ icon: "error", title: "Töltse ki a telefonszám mezőt!" });
      return isInputValid;
    }
    if (parents === "") {
      isInputValid = false;
      Toast.fire({ icon: "error", title: "Töltse ki a felnőttek mezőt!" });
      return isInputValid;
    }
    if (children === "") {
      isInputValid = false;
      Toast.fire({ icon: "error", title: "Töltse ki a gyerekek mezőt!" });
      return isInputValid;
    }
    if (arrDate === null) {
      isInputValid = false;
      Toast.fire({
        icon: "error",
        title: "Válassza ki az érkezési dátumot!"
      });
      return isInputValid;
    }
    if (depDate === null) {
      isInputValid = false;
      Toast.fire({ icon: "error", title: "Válassza ki a távozási dátumot!" });
      return isInputValid;
    }

    return isInputValid;
  }

  async function submitData(e) {
    setLoading(true);
    e.preventDefault();
    let isInputValid = checkData();

    if (isInputValid === false) {
      setLoading(false);
      return;
    }
    let dataArrDate = GenerateDate(arrDate);
    let dataDepDate = GenerateDate(depDate);

    let dataObject = { email: email, name: name, phoneNumber: phoneNumber, parents: parents, children: children, note: note, apartmanType: type, apartmanNumber: apartmanNumber, arrDate: dataArrDate, depDate: dataDepDate };

    MakeNewReservation(dataObject).then(result => {
      if (result === false) {
        alert("Valami hiba történt!");
      } else {
        setReservationId(result);
        setIsAfterReservation(true);

        handleSubmit(email, result, dataArrDate, dataDepDate).then(() => {
          handleKeroSubmit(email, name, dataArrDate, dataDepDate).then(() => {
            setLoading(false);
          });
        });
      }
    });
  }

  if (loading) {
    return <div className={styles.reserveForm}>
        <ReserveFormIntro />
        <Loader main={true} />
      </div>;
  }

  if (isAfterReservation) {
    router.push("/reservation#code");

    return <div className={styles.reserveForm}>
        <ReserveFormIntro />
        <div className={styles.details} id="code">
          <h1>Foglalási kód</h1>
          <p>
            Ezt a kódot érdemes felírni mert a főoldalról ezzel a kóddal lehet
            ellenőrizni a foglalás részleteit!
          </p>
          <div>
            <label htmlFor="">
              {reservationId}
            </label>
            {copied === false ? <button className={styles.copyButton} onClick={() => {
                    setCopied(true);
                    navigator.clipboard.writeText(reservationId);
                  }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.5 3A1.501 1.501 0 009 4.5h6A1.5 1.5 0 0013.5 3h-3zm-2.693.178A3 3 0 0110.5 1.5h3a3 3 0 012.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15z" clipRule="evenodd" />
                  </svg>
                </button> : <button className={styles.copyButton}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z" clipRule="evenodd" />
                  </svg>
                </button>}
          </div>
        </div>
      </div>;
  }

  if (apartmanNumber === 0) {
    return;
  }

  console.log("Email: ", email, "Name: ", name, "Phone: ", phoneNumber, "Parents: ", parents, "Children: ", children, "Note: ", note, "ArrDate: ", arrDate, "DepDate: ", depDate);

  return <form className={styles.reserveForm} onSubmit={submitData}>
      <ReserveFormIntro />
      {apartmanNumber === 0 ? <h3 id="reserveFocus">
            Választott apartman száma: Nincs kiválasztva
          </h3> : <h3 id="reserveFocus">
            Választott apartman száma: {apartmanNumber}
          </h3>}
      <div className={styles.sep} />
      <div className={styles.data}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z" clipRule="evenodd" />
        </svg>
        <div className={styles.input}>
          {/* <p>Email</p> */}
          <div className={styles.group}>
            <input type="email" className={styles.input} minLength={1} placeholder="" onChange={e => {
                setEmail(e.target.value);
              }} value={email} />
            <span className={styles.highlight} />
            <span className={styles.bar} />
            <label className={styles.label}>Email cím</label>
          </div>
        </div>
      </div>
      <div className={styles.data}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
        </svg>
        <div className={styles.input}>
          <div className={styles.group}>
            <input type="text" className={styles.input} minLength={1} placeholder="" onChange={e => {
                setName(e.target.value);
              }} value={name} />
            <span className={styles.highlight} />
            <span className={styles.bar} />
            <label className={styles.label}>Név</label>
          </div>
        </div>
      </div>
      <div className={styles.data}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
          <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
        </svg>
        <div className={styles.input}>
          <div className={styles.group}>
            <input type="text" className={styles.input} minLength={1} placeholder="" onChange={e => {
                setPhoneNumber(e.target.value);
              }} value={phoneNumber} />
            <span className={styles.highlight} />
            <span className={styles.bar} />
            <label className={styles.label}>Telefon szám</label>
          </div>
        </div>
      </div>
      <div className={styles.data}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
          <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
        </svg>
        <div className={styles.input}>
          <div className={styles.group}>
            <input type="text" className={styles.input} minLength={1} placeholder="" onChange={e => {
                setParents(e.target.value);
              }} value={parents} />
            <span className={styles.highlight} />
            <span className={styles.bar} />
            <label className={styles.label}>Felnőttek száma</label>
          </div>
        </div>
      </div>
      <div className={styles.data}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
          <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
        </svg>
        <div className={styles.input}>
          <div className={styles.group}>
            <input type="text" className={styles.input} minLength={1} placeholder="" onChange={e => {
                setChildren(e.target.value);
              }} value={children} />
            <span className={styles.highlight} />
            <span className={styles.bar} />
            <label className={styles.label}>Gyerekek száma</label>
          </div>
        </div>
      </div>
      <div className={styles.data}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
          <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clipRule="evenodd" />
        </svg>
        <div className={styles.input}>
          <div className={styles.group}>
            <input type="text" className={styles.input} minLength={1} placeholder="" onChange={e => {
                setNote(e.target.value);
              }} value={note} />
            <span className={styles.highlight} />
            <span className={styles.bar} />
            <label className={styles.label}>Egyéb megjegyzés</label>
          </div>
        </div>
      </div>
      <div className={styles.calendarData}>
        <div className={styles.calendar}>
          {arrDate != undefined && arrDate != null ? <label>
                Érkezés dátuma: {GenerateDate(arrDate)}
              </label> : <label>
                Érkezés dátuma: {"Nincs kiválasztva"}
              </label>}
          <DateCalendarComponent reservation={true} isDisabled={false} apartmanNumber={apartmanNumber} type={type} />
        </div>
        <div className={styles.calendar} style={{ opacity: arrDate ? 1 : 0.5 }}>
          {depDate != undefined && depDate != null ? <label>
                Távozás dátuma: {GenerateDate(depDate)}
              </label> : <label>
                {!arrDate ? <span>
                      {"Távozás dátuma: Válassz érkezési dátumot!"}
                    </span> : <span>
                      {"Távozás dátuma: Nincs kiválasztva"}
                    </span>}
              </label>}
          <DateCalendarComponent reservation={false} isDisabled={false} apartmanNumber={apartmanNumber} type={type} />
        </div>
      </div>
      <button type="submit" className={`${styles.button} ${styles.type1}`}>
        <span className={styles.before}>Foglalás</span>
        <span className={styles.after}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
            <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
          </svg>
        </span>
      </button>
    </form>;
}
