"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState, useSyncExternalStore } from "react";
import Logo from "../Logo";
import styles from "./styles.module.scss";
import { MENUS } from "<utils>/constants";

interface NavbarProps {
  isInLandingPage?: boolean;
}

const HEADER_MARGIN_TOP = 10;
const HEADER_SLIDE_DOWN_SPEED = 4;


const Navbar: React.FC<NavbarProps> = ({ isInLandingPage }) => {
  const [ animateLogo, setAnimateLogo ] = useState(true);
  const route = useRouter();

  const headerRef = useRef<HTMLElement>(null);

  const windowScrollYSubscriber = (callback: () => void) => {
    window.addEventListener("scroll", callback);

    return () => window.removeEventListener("scroll", callback);
  };

  const getWindowScrollY = () => window.scrollY;

  const windowScrollY = useSyncExternalStore(windowScrollYSubscriber, getWindowScrollY);

  const getTopValue = () => {
    if ( !headerRef.current ) return;

    const headerHeight = headerRef.current.clientHeight;

    let top = headerHeight * -1;

    top += windowScrollY / HEADER_SLIDE_DOWN_SPEED;

    console.log({ windowScrollY, top });

    if ( Math.floor(top) < 0 && windowScrollY >= headerHeight ) {
      top *= 2;
    }

    if ( windowScrollY === 0 ) {
      top = headerHeight * -1;
    }

    if ( Math.floor(top) >= 0 ) {
      top = HEADER_MARGIN_TOP;
    }

    return `${ top }px`;
  };

  return (
    <header
      id="header"
      ref={ headerRef }
      style={ {
        top: getTopValue()
      } }
      className={ styles["header-base"] }
      data-type={ isInLandingPage ? "lp" : "general" }
    >
      <div className={ styles["logo-container"] } onClick={ () => route.push("/") }>
        { animateLogo ? (
          <Logo fontColor="black" isHeader/>
        ) : (
          <span>
            <strong>
              g<em>w</em>
            </strong>
          </span>
        ) }
      </div>
      <nav className={ styles["nav-menus-container"] }>
        <ul className={ styles["nav-menu-list"] }>
          { MENUS.map((menu) => (
            <Link href={ menu.url } key={ menu.name }>
              <li className={ styles["nav-menu"] }>
                <span>{ menu.name }</span>
              </li>
            </Link>
          )) }
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
