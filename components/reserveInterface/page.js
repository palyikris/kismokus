import ReserveApartmanComponent from "./apartman/page";
import ReserveHouseComponent from "./house/page";
import styles from "./page.module.css";
import ReserveTopartComponent from "./topart/page";

export default function ReserveInterfaceComponent(props) {
  let { title } = props;

  return (
    <div className={styles.container}>
      <h1>
        Marosi Mókus Vendégház
      </h1>
      <ReserveApartmanComponent type="dreamapartman"></ReserveApartmanComponent>
    </div>
  );
}
