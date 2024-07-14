"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../Logo";
import styles from "./styles.module.scss";
import { MENUS } from "<utils>/constants";

const Navbar: React.FC = () => {
  const [animateLogo, setAnimateLogo] = useState(true);
  const route = useRouter();

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      if (window.scrollY >= headerRef.current.clientHeight) {
        setAnimateLogo(false);
        headerRef.current.style.top = "0px";
      } else {
      }
    }

    window.addEventListener("scroll", () => {
      if (!headerRef.current) return;

      let top = headerRef.current.clientHeight * -1;
      top += window.scrollY / 4;

      if (top <= 0 && window.scrollY > headerRef.current.clientHeight) {
        setAnimateLogo(false);
        headerRef.current.style.top = `${top * 2}px`;
      }

      if (window.scrollY === 0) {
        headerRef.current.style.top = `${
          headerRef.current.clientHeight * -1
        }px`;
        setAnimateLogo(true);
      }
    });
  }, []);

  return (
    <header id="header" ref={headerRef} className={styles["header-base"]}>
      <div className={styles["logo-container"]} onClick={() => route.push("/")}>
        {animateLogo ? (
          <Logo fontColor="black" isHeader />
        ) : (
          <span>
            <strong>
              g<em>w</em>
            </strong>
          </span>
        )}
      </div>
      <nav className={styles["nav-menus-container"]}>
        <ul className={styles["nav-menu-list"]}>
          {MENUS.map((menu) => (
            <Link href={menu.url} key={menu.name}>
              <li className={styles["nav-menu"]}>
                <span>{menu.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
