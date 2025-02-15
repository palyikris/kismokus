import { useState } from "react";
import styles from "./page.module.css"
import Loader from './../loader/page';
import { makeId } from "@/lib/random";
import { SendInvitation } from "@/lib/sendinv";
import Swal from "sweetalert2";


export default function ReviewSenderComponent() {

  const [email, setEmail] = useState("")
  const [type, setType] = useState("0")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleReviewSendSubmit = async(e) => {
    e.preventDefault();
    if (email === "" || name === "") {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Töltsd ki az összes mezőt!"
      });
      return;
    }
    if (type === "0") {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Válassz apartman típust!"
      });
      return;
    }
    setIsLoading(true)
    HandleInvSend(type, email, name)
    setEmail("")
    setType("0")
    setName("")
    setIsLoading(false)
  }

  const HandleInvSend = (type, email, name) => {
    setIsLoading(true)
    console.log(type, email)
    let token = makeId(20); // prompt: making an id for the new reservation in the database
    token = token.replace(/\s+/g, "");
    Swal.fire({
      title: "Biztos elküldöd?",
      text: "Ezt nem lehet visszacsinálni!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#007F4D",
      cancelButtonColor: "#daa06d",
      cancelButtonText: "Mégse",
      confirmButtonText: "Igen, elküldöm!",
    }).then((result) => {
      if (result.isConfirmed) {
        SendInvitation(email, token, name, type).then(() => {
          Swal.fire({
            title: "Elküldve!",
            text: "A vendég rövidesen megkapja az emailt.",
            icon: "success",
            confirmButtonText: "Rendben",
            confirmButtonColor: "#daa06d"
          }).then(() => {
            setIsLoading(false);
          });
        });
      }
      else {
        setIsLoading(false);
      }
    });
  }

  if (isLoading) {
    return (
      <form className={styles.form}>
        <Loader></Loader>
      </form>
    )
  }

  return (
    <form onSubmit={handleReviewSendSubmit} className={styles.form}>
      <input type="email" placeholder="Milyen emailre küldenél értékelő emailt?" onChange={(e) => { setEmail(e.target.value) }} value={email} />
      <input type="text" placeholder="Milyen névre küldenél értékelő emailt?" onChange={(e) => { setName(e.target.value) }} value={name} />
      <select name="type" id="type" onChange={(e) => {setType(e.target.value)}} value={type}>
        <option value="0">Válassz apartman típust!</option>
        <option value="apartman">Dream apartman</option>
        <option value="topart">Dream tópart</option>
      </select>
      <button type="submit">Küldés</button>
    </form>
  )
}