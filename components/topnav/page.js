"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useApartman } from "@/context/contexthook";
import { motion } from "framer-motion";
import BasicAnimationWrapper from "../appwrapper/page";

export default function Topnav() {
  let router = useRouter();
  const path = usePathname();

  const links = [
    {
      href: "/",
      text: "Főoldal",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
      )
    },
    {
      href: "/options",
      text: "Lehetőségek",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
          <path
            fillRule="evenodd"
            d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    {
      href: "/reservation",
      text: "Foglalás",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
          <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
        </svg>
      )
    }
  ];

  let {
    isDreamHouseOpen,
    isDreamApartmanOpen,
    isDreamTopartOpen,
    setIsDreamHouseOpen,
    setIsDreamApartmanOpen,
    setIsDreamTopartOpen
  } = useApartman();

  return (
    // <BasicAnimationWrapper>
    <div className={styles.container}>
      {links.map((link, index) => {
        if (links[index].href === path) {
          return (
            <motion.button
              whileHover={{ scale: 1.1 }}
              className={styles.nav}
              key={index}
              onClick={() => {
                setIsDreamApartmanOpen(false);
                setIsDreamHouseOpen(false);
                setIsDreamTopartOpen(false);
                router.push(link.href);
              }}
            >
              {link.svg}
              <p style={{ color: "#daa06d" }}>
                {link.text}
              </p>
            </motion.button>
          );
        }
        return (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.05 }}
            className={styles.nav}
            key={index}
            onClick={() => {
              setIsDreamApartmanOpen(false);
              setIsDreamHouseOpen(false);
              setIsDreamTopartOpen(false);
              router.push(link.href);
            }}
          >
            {link.svg}
            <p>
              {link.text}
            </p>
          </motion.button>
        );
      })}
    </div>
    // </BasicAnimationWrapper>
  );
}
