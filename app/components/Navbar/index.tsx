"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Logo from "../Logo";
import styles from "./styles.module.scss";
import { MENUS } from "<utils>/constants";

interface NavbarProps {
  isInLandingPage?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isInLandingPage }) => {
  const [ animateLogo, setAnimateLogo ] = useState(true);
  const route = useRouter();

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if ( headerRef.current ) {
      if ( window.scrollY >= headerRef.current.clientHeight ) {
        setAnimateLogo(false);
        headerRef.current.style.top = "0px";
      } else {
      }
    }
  }, []);

  const subscriber = (callback: () => void) => {
    window.addEventListener("scroll", callback);

    return () => window.removeEventListener("scroll", callback);
  };

  const getWindowScrollY = () => window.scrollY;

  const windowScrollY = useSyncExternalStore(subscriber, getWindowScrollY);

  const getTopValue = () => {
    if ( !headerRef.current ) return;


    let top = headerRef.current.clientHeight * -1;


    top += windowScrollY / 4;

    // console.log({ windowScrollY, top, topAbs: Math.abs(top) });

    if ( Math.floor(top) < 0 && windowScrollY >= headerRef.current.clientHeight ) {
      top *= 2;
    }

    if ( windowScrollY === 0 ) {
      top = headerRef.current.clientHeight * -1;
    }

    if ( Math.floor(top) >= 0 ) {
      top = 0;
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
