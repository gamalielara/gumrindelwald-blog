import Link from "next/link";
import React from "react";
import { MENUS } from "../../app/utils/vars";
import styles from "./styles.module.scss";

const SideBar = () => {
  return (
    <aside className={styles["sidebar-aside"]}>
      <ul className={styles["nav-menu-list"]}>
        {MENUS.map((menu) => (
          <li className={styles["nav-menu"]}>
            <Link href={menu.url} key={menu.name}>
              <span>{menu.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
