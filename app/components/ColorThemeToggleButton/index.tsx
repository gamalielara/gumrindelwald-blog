import React from "react";
import { setColorTheme } from "<app>/actions";
import styles from "./styles.module.scss";
import moon from "<assets>/svg/moon.svg";
import sun from "<assets>/svg/sun.svg";
import Image from "next/image";

const ColorThemeToggleButton = () => {
  return (
    <button className={styles["toggle-btn"]} onClick={() => setColorTheme()}>
      <div>
        <Image src={moon} alt="dark-mode-icon" width={20} height={20} />
        <Image src={sun} alt="light-mode-icon" width={20} height={20} />
      </div>
    </button>
  );
};

export default ColorThemeToggleButton;
