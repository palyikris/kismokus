import ReserveApartmanComponent from "./apartman/page";
import ReserveHouseComponent from "./house/page";
import styles from "./page.module.css";
import ReserveTopartComponent from "./topart/page";

export default function ReserveInterfaceComponent(props) {
  let { title } = props;

  return (
    <div className={styles.container}>
      <h1>
        Kismókus Vendégház
      </h1>
      {/* {title === "Dream House" ? (<ReserveHouseComponent type="dreamhouse"></ReserveHouseComponent>) : (<></>)} */}
      {title === "Dream Apartman" ? (<ReserveApartmanComponent type="dreamapartman"></ReserveApartmanComponent>) : (<></>)}
      {title === "Dream Tópart" ? (<ReserveTopartComponent type="dreamtopart"></ReserveTopartComponent>) : (<></>)}
    </div>
  );
}
