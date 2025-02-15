import styles from "./page.module.css";

export default function Loader(props) {
  if (props.main) {
    return (
      <div className={styles.containermain}>
        <div className={styles.flex}>
          <div className={styles.loader} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.containerwhite}>
        <div className={styles.flex}>
          <div className={styles.loader} />
        </div>
      </div>
    );
  }
}
