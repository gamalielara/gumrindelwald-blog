import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { MENUS } from "../../utils/vars";
import NavMenu from "./NavMenu";
import Logo from "../logo/Logo";
import styles from "./styles.module.scss";

const Navbar: React.FC = () => {
  const route = useRouter();

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const baseClassnames = styles["header-base"];
    const becomeFlexRowClassnames = baseClassnames + " " + styles["header-row"];
    const becomeFlexColClassnames = baseClassnames + " " + styles["header-col"];

    if (headerRef.current) {
      if (window.scrollY > headerRef.current.clientHeight) {
        headerRef.current.className = becomeFlexRowClassnames;
      } else {
        headerRef.current.className = becomeFlexColClassnames;
      }
    }

    window.addEventListener("scroll", () => {
      if (!headerRef.current) return;
      let top = headerRef.current.clientHeight * -1;
      top += window.scrollY / 4;
      if (top <= 0 && window.scrollY > headerRef.current.clientHeight) {
        headerRef.current.style.top = `${top * 2}px`;
        headerRef.current.className = becomeFlexRowClassnames;
      }
      if (window.scrollY === 0) {
        headerRef.current.className = becomeFlexColClassnames;
        headerRef.current.style.top = `${
          headerRef.current.clientHeight * -1
        }px`;
      }
    });
  }, []);

  return (
    <header id="header" ref={headerRef}>
      <div className={styles["logo-container"]} onClick={() => route.push("/")}>
        <Logo fontColor="black" isHeader />
      </div>
      <nav className={styles["nav-menus-container"]}>
        <ul className={styles["nav-menu-list"]}>
          {MENUS.map((menu) => (
            <Link href={menu.url} key={menu.name}>
              <a>
                <li className={styles["nav-menu"]}>
                  <span>{menu.name}</span>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
