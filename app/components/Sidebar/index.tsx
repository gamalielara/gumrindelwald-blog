"use client";

import Link from "next/link";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { MENUS } from "<utils>/constants";

const SideBar = React.forwardRef((_, ref) => {
  const [isSlideIn, setIsSlideIn] = useState(false);

  useImperativeHandle(ref, () => ({
    slide: () => {
      setIsSlideIn((state) => !state);
    },
  }));

  useEffect(() => {
    let overvlow = "auto";
    if (isSlideIn) {
      overvlow = "hidden";
    } else {
      overvlow = "auto";
    }

    document.body.style.overflow = overvlow;
  }, [isSlideIn]);

  return (
    <aside className={styles["sidebar-aside"]} data-slide-in={isSlideIn}>
      <ul className={styles["nav-menu-list"]}>
        {MENUS.map((menu) => (
          <li className={styles["nav-menu"]}>
            <Link href={menu.url} key={menu.name}>
              <span>{menu.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button
        className={styles["back-btn"]}
        onClick={() => setIsSlideIn(false)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </button>
    </aside>
  );
});

export default SideBar;
