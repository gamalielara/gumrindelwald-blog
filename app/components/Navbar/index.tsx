"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useMemo, useRef, useState, useSyncExternalStore } from "react";
import Logo from "../Logo";
import styles from "./styles.module.scss";
import { MENUS } from "<utils>/constants";

interface NavbarProps {
  isInLandingPage?: boolean;
}

const HEADER_MARGIN_TOP = 10;
const HEADER_SLIDE_DOWN_SPEED = 4;

const Navbar: React.FC<NavbarProps> = ({ isInLandingPage }) => {
  const [animateLogo, setAnimateLogo] = useState(true);
  const route = useRouter();

  const headerRef = useRef<HTMLElement>(null);

  const windowScrollYSubscriber = (callback: () => void) => {
    window.addEventListener("scroll", () => {
      callback();
    });

    return () => window.removeEventListener("scroll", callback);
  };

  const getWindowScrollY = () => window.scrollY;

  const serverSnapShot = () => 0;

  const windowScrollY = useSyncExternalStore(
    windowScrollYSubscriber,
    getWindowScrollY,
    serverSnapShot
  );

  const getTopValue = () => {
    if (!headerRef.current) return;

    const headerHeight = headerRef.current.clientHeight;

    let top = headerHeight * -1;

    top += windowScrollY / HEADER_SLIDE_DOWN_SPEED;

    if (Math.floor(top) < 0 && windowScrollY >= headerHeight) {
      if (isInLandingPage) {
        headerRef.current.setAttribute("data-should-show", "yes");
      }

      top *= 2;
    }

    if (windowScrollY === 0) {
      top = headerHeight * -1;
    }

    if (windowScrollY <= headerHeight && isInLandingPage) {
      headerRef.current.setAttribute("data-should-show", "no");
    }

    if (Math.floor(top) >= 0) {
      top = HEADER_MARGIN_TOP;
    }

    return `${top}px`;
  };

  const shouldHeaderShowOnMount = useMemo(() => {
    if (!headerRef.current) return;

    if (isInLandingPage) {
      return windowScrollY >= headerRef.current.clientHeight;
    }

    return windowScrollY > 0;
  }, [headerRef.current]);

  return (
    <header
      id="header"
      ref={headerRef}
      style={{
        top: getTopValue(),
      }}
      className={styles["header-base"]}
      data-should-show={shouldHeaderShowOnMount ? "yes" : "no"}
    >
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
