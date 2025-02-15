"use client";

import ImagesComponentForApartmans from "@/components/imagescomp/page";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

export default function ImagesPage() {
  let path = usePathname();

  path = path.split("/");
  let apartmanType = path[path.length - 2];
  let apartmanNumber = parseInt(path[path.length - 1]);

  // if (apartmanType === "dreamhouse") {
  //   if (apartmanNumber === 1) {
  //     return (
  //       <ImagesComponentForApartmans startingNum={1} nOfChildren={3}>
  //         <div className={styles.img} />
  //         <div className={styles.img} />
  //         <div className={styles.img} />
  //       </ImagesComponentForApartmans>
  //     );
  //   }
  // }
  if (apartmanType === "dreamapartman") {
    if (apartmanNumber === 1) {
      return (
        <ImagesComponentForApartmans startingNum={1} nOfChildren={7}>
          <div className={styles.ap1} />
          <div className={styles.ap1} />
          <div className={styles.ap1} />
          <div className={styles.ap1} />
          <div className={styles.ap1} />
          <div className={styles.ap1} />
          <div className={styles.ap1} />
        </ImagesComponentForApartmans>
      );
    } else if (apartmanNumber === 2) {
      return (
        <ImagesComponentForApartmans startingNum={1} nOfChildren={4}>
          <div className={styles.ap2} />
          <div className={styles.ap2} />
          <div className={styles.ap2} />
          <div className={styles.ap2} />
        </ImagesComponentForApartmans>
      );
    } else if (apartmanNumber === 3) {
      return (
        <ImagesComponentForApartmans startingNum={1} nOfChildren={5}>
          <div className={styles.ap3} />
          <div className={styles.ap3} />
          <div className={styles.ap3} />
          <div className={styles.ap3} />
          <div className={styles.ap3} />
        </ImagesComponentForApartmans>
      );
    } else if (apartmanNumber === 4) {
      return (
        <ImagesComponentForApartmans startingNum={1} nOfChildren={6}>
          <div className={styles.ap4} />
          <div className={styles.ap4} />
          <div className={styles.ap4} />
          <div className={styles.ap4} />
          <div className={styles.ap4} />
          <div className={styles.ap4} />
        </ImagesComponentForApartmans>
      );
    } else {
      return (
        <ImagesComponentForApartmans
          startingNum={1}
          nOfChildren={4}
          isGeneral={true}
          route={"dreamApartman"}
        >
          <div className={styles.ap5} />
          <div className={styles.ap5} />
          <div className={styles.ap5} />
          <div className={styles.ap5} />
        </ImagesComponentForApartmans>
      );
    }
  } else {
    if (apartmanNumber === 2) {
      return (
        <ImagesComponentForApartmans startingNum={1} nOfChildren={12}>
          <div className={styles.to1} />
          <div className={styles.to1} />
          <div className={styles.to1} />
          <div className={styles.to1} />
          <div className={styles.to1} />
          <div className={styles.to1} />
          <div className={styles.to1} />
          <div className={styles.to1} />
          <div className={styles.to1} />
          <div className={styles.to1} />
          <div className={styles.to1} />
          <div className={styles.to1} />
        </ImagesComponentForApartmans>
      );
    } else if (apartmanNumber === 1) {
      return (
        <ImagesComponentForApartmans startingNum={1} nOfChildren={9}>
          <div className={styles.to2} />
          <div className={styles.to2} />
          <div className={styles.to2} />
          <div className={styles.to2} />
          <div className={styles.to2} />
          <div className={styles.to2} />
          <div className={styles.to2} />
          <div className={styles.to2} />
          <div className={styles.to2} />
        </ImagesComponentForApartmans>
      );
    } else if (apartmanNumber === 3) {
      return (
        <ImagesComponentForApartmans startingNum={1} nOfChildren={6}>
          <div className={styles.to3} />
          <div className={styles.to3} />
          <div className={styles.to3} />
          <div className={styles.to3} />
          <div className={styles.to3} />
          <div className={styles.to3} />
        </ImagesComponentForApartmans>
      );
    } else {
      return (
        <ImagesComponentForApartmans
          startingNum={1}
          nOfChildren={4}
          isGeneral={true}
          route={"dreamTopart"}
        >
          <div className={styles.to4} />
          <div className={styles.to4} />
          <div className={styles.to4} />
          <div className={styles.to4} />
        </ImagesComponentForApartmans>
      );
    }
  }
}
