"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useMemo, useRef, useSyncExternalStore } from "react";
import Logo from "../Logo";
import styles from "./styles.module.scss";
import { MENUS, WindowBreakPoints } from "<utils>/constants";
import SideBar, { SideBarRef } from "<components>/Sidebar";
import ColorThemeToggleButton from "<components>/ColorThemeToggleButton";

interface NavbarProps {
  isInLandingPage?: boolean;
}

const HEADER_MARGIN_TOP = 10;
const HEADER_SLIDE_DOWN_SPEED = 4;

const Navbar: React.FC<NavbarProps> = ({ isInLandingPage }) => {
  const route = useRouter();

  const headerRef = useRef<HTMLElement>(null);

  const windowScrollYSubscriber = (callback: () => void) => {
    window.addEventListener("scroll", callback);

    return () => window.removeEventListener("scroll", callback);
  };

  const getWindowScrollY = () => window.scrollY;

  const serverSnapShot = () => 0;

  const windowScrollY = useSyncExternalStore(
    windowScrollYSubscriber,
    getWindowScrollY,
    serverSnapShot
  );

  const windowWidthSubscriber = (callback: () => void) => {
    window.addEventListener("resize", callback);

    return () => window.removeEventListener("resize", callback);
  };

  const getWindowWidth = () => window.innerWidth;

  const windowWidth = useSyncExternalStore(
    windowWidthSubscriber,
    getWindowWidth,
    () => 1000
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
    if (isInLandingPage) {
      if (!headerRef.current) return;

      return windowScrollY >= headerRef.current.clientHeight;
    }

    return true;
  }, [headerRef.current]);

  const sideBarRef = useRef<SideBarRef>(null);

  const slideBar = () => {
    sideBarRef.current?.slide();
  };

  return (
    <>
      <header
        id="header"
        ref={headerRef}
        style={{
          top: getTopValue(),
        }}
        className={styles["header-base"]}
        data-should-show={shouldHeaderShowOnMount ? "yes" : "no"}
      >
        <div
          className={styles["logo-container"]}
          onClick={() => route.push("/")}
        >
          <Logo
            minimize={
              (windowWidth >= WindowBreakPoints.MD &&
                windowWidth <= WindowBreakPoints.LG_MD) ||
              (windowWidth >= WindowBreakPoints.LG &&
                windowWidth <= WindowBreakPoints.XL)
            }
          />
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
        <button className={styles["hamburger-menu"]} onClick={slideBar}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <ColorThemeToggleButton />
      </header>
      <SideBar ref={sideBarRef} />
    </>
  );
};

export default Navbar;
