import React from "react";
import { setColorTheme } from "../../actions";
import styles from "./styles.module.scss";

const ColorThemeToggleButton = () => {
  return (
    <button
      className={styles["toggle-btn"]}
      onClick={() => setColorTheme()}
      data-theme={""}
    ></button>
  );
};

export default ColorThemeToggleButton;
