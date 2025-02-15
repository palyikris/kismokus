"use client";

import styles from "./page.module.css";

export default function ReservePic(props) {
  let { type, apartmanNumber, text } = props;

  return (
    <div className={styles.pic}>
      <p className={styles.caption}>
        {text}
      </p>
    </div>
  );
}
