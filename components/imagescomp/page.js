"use client";

import { useRef, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function ImagesComponentForApartmans(props) {
  let { startingNum, nOfChildren, isGeneral, route } = props;
  let imagesRef = useRef();
  let [currImageNumberForDisplay, setCurrImageNumberForDisplay] = useState(1);
  let router = useRouter();

  function NextImage() {
    if (currImageNumberForDisplay === nOfChildren) {
      setCurrImageNumberForDisplay(startingNum);
      imagesRef.current.style.marginLeft = "0%";
    } else {
      setCurrImageNumberForDisplay(num => num + 1);
      imagesRef.current.style.marginLeft = `-${currImageNumberForDisplay *
        100}%`;
    }
  }

  function PrevImage() {
    if (currImageNumberForDisplay === startingNum) {
      setCurrImageNumberForDisplay(nOfChildren);
      imagesRef.current.style.marginLeft = `-${(nOfChildren - 1) * 100}%`;
    } else {
      setCurrImageNumberForDisplay(num => num - 1);
      imagesRef.current.style.marginLeft = `-${(currImageNumberForDisplay - 2) *
        100}%`;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.backButton}>
        {isGeneral
          ? <button
              onClick={() => {
                router.push(`/options#${route}`);
              }}
            >
              Vissza
            </button>
          : <button
              onClick={() => {
                router.push("/reservation");
              }}
            >
              Vissza
            </button>}
      </div>
      <div className={styles.numberDisplay}>
        <p>
          {currImageNumberForDisplay} / {nOfChildren}
        </p>
      </div>
      <div className={styles.handles}>
        <button onClick={PrevImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button onClick={NextImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className={styles.window}>
        <div
          className={styles.images}
          ref={imagesRef}
          style={{ width: `${nOfChildren * 100}%` }}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
