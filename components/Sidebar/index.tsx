import Link from "next/link";
import React from "react";
import { MENUS } from "../../utils/vars";
import styles from "./styles.module.scss";

const SideBar = () => {
  return (
    <aside className="h-screen bg-white absolute left-full z-50 w-screen flex flex-col items-start justify-center">
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
    </aside>
  );
};

export default SideBar;
