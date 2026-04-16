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
      <div
        style={{
          background: "linear-gradient(120deg, #cbe2b2 0%, #b6e3d2 100%)",
          border: "2px solid #4a9384",
          borderRadius: "1.2rem",
          boxShadow: "0 4px 18px 0 rgba(74,147,132,0.10)",
          padding: "2rem 2.5rem 1.5rem 2.5rem",
          margin: "2.5rem auto 2rem auto",
          maxWidth: 600,
          color: "#2f4858",
          fontSize: "1.08rem",
          position: "relative",
          transition: "box-shadow 0.3s"
        }}
      >
        <h2
          style={{
            color: "#4a9384",
            fontSize: "1.4rem",
            fontWeight: 700,
            marginBottom: "1rem",
            textAlign: "center",
            letterSpacing: "0.02em",
            position: "relative"
          }}
        >
          Lemondási feltételek
          <span
            style={{
              display: "block",
              margin: "0.5rem auto 0 auto",
              width: "40%",
              height: 2,
              background: "#9dc183",
              borderRadius: 2
            }}
          ></span>
        </h2>
        <ol style={{ listStyle: "decimal inside", paddingLeft: 0, margin: 0 }}>
          <li style={{ marginBottom: "0.7em", lineHeight: 1.5 }}>
            <b style={{ color: "#2f4858", background: "rgba(157,193,131,0.13)", borderRadius: "0.4em", padding: "0.1em 0.4em", fontWeight: 600 }}>
              Lemondás díjmentesen:
            </b> A foglalás az érkezést megelőző 14. napig díjmentesen lemondható. A lemondást írásban (emailben vagy üzenetben) kell jelezni.
          </li>
          <li style={{ marginBottom: "0.7em", lineHeight: 1.5 }}>
            <b style={{ color: "#2f4858", background: "rgba(157,193,131,0.13)", borderRadius: "0.4em", padding: "0.1em 0.4em", fontWeight: 600 }}>
              Lemondás 14 napon belül:
            </b> Az érkezést megelőző 14 napon belüli lemondás esetén a foglalási díj 50%-a fizetendő kötbérként.
          </li>
          <li style={{ marginBottom: "0.7em", lineHeight: 1.5 }}>
            <b style={{ color: "#2f4858", background: "rgba(157,193,131,0.13)", borderRadius: "0.4em", padding: "0.1em 0.4em", fontWeight: 600 }}>
              Lemondás 7 napon belül vagy meg nem jelenés:
            </b> Az érkezést megelőző 7 napon belüli lemondás, illetve meg nem jelenés („noshow”) esetén a teljes foglalási összeg 100%-a fizetendő.
          </li>
          <li style={{ marginBottom: "0.7em", lineHeight: 1.5 }}>
            <b style={{ color: "#2f4858", background: "rgba(157,193,131,0.13)", borderRadius: "0.4em", padding: "0.1em 0.4em", fontWeight: 600 }}>
              Módosítás:
            </b> A foglalás módosítása az érkezést megelőző 14. napig díjmentes, később csak a szabad kapacitás függvényében lehetséges.
          </li>
          <li style={{ marginBottom: "0.7em", lineHeight: 1.5 }}>
            <b style={{ color: "#2f4858", background: "rgba(157,193,131,0.13)", borderRadius: "0.4em", padding: "0.1em 0.4em", fontWeight: 600 }}>
              Vis maior:
            </b> Vis maior esetén (pl. súlyos betegség, közlekedési korlátozás, természeti kár) a lemondási díj egyedi elbírálás alapján elengedhető vagy átfoglalás ajánlható fel.
          </li>
        </ol>
      </div>
    </div>
  );
}
