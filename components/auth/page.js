"use client";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebaseConfig";
import styles from "./page.module.css";

export default function AuthPage(props) {
  let router = useRouter();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordAgain, setPasswordAgain] = useState("");
  let [error, setError] = useState("");
  let { isLogin } = props;

  const handleAuth = (e, isLogin) => {
    e.preventDefault();
    if (isLogin) {
      try {
        signInWithEmailAndPassword(auth, email, password).then(() => {
          router.push("/reservations");
        });
      } catch (error) {
        setError(error.message);
      }
    } else {
      if (password !== passwordAgain) {
        setError("A jelszavak nem egyeznek!");
        return;
      }
      try {
        createUserWithEmailAndPassword(auth, email, password).then(() => {
          router.push("/reservations");
        });
      } catch (error) {
        setError(error.message);
      }
    }
  };

  if (isLogin) {
    return (
      <form
        onSubmit={e => {
          handleAuth(e, true);
        }}
        className={styles.form}
      >
        <h1>Bejelentkezés</h1>
        <div className={styles.input}>
          <p htmlFor="">Email</p>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div className={styles.input}>
          <p htmlFor="">Jelszó</p>
          <input
            type="password"
            placeholder="Jelszó"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div className={styles.buttons}>
          <button type="submit">Bejelentkezés</button>
          <button
            type="button"
            onClick={() => {
              router.push("/");
            }}
          >
            Vissza a főoldalra
          </button>
        </div>
        <p>
          {error}
        </p>
      </form>
    );
  }
  return (
    <form
      onSubmit={e => {
        handleAuth(e, false);
      }}
    >
      <h1>Regisztráció</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Jelszó"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <input
        type="password"
        placeholder="Jelszó újra"
        value={passwordAgain}
        onChange={event => setPasswordAgain(event.target.value)}
      />
      <div className={styles.buttons}>
        <button
          type="text"
          className={styles.home}
          onClick={() => {
            router.push("/");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
        </button>
        <button type="submit">Regisztráció</button>
      </div>
      <p>
        {error}
      </p>
    </form>
  );
}
