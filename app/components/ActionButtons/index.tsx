"use client";

import React from "react";
import styles from "./styles.module.scss";

const ActionButtons = () => {
  return (
    <>
      <hr className={styles["divider"]} />
      <h3 className={styles["action-title"]}>
        Do you enjoy reading this article? Leave your mark here! :)
      </h3>
      <div className={styles["action-buttons-wrapper"]}>
        <button
          className={`${styles["action-button"]} ${styles["action-button--like"]}`}
          onClick={() => alert("HEHE")}
        >
          19
        </button>
        <button
          className={`${styles["action-button"]} ${styles["action-button--comment"]}`}
          onClick={() => alert("HEHE")}
        >
          100
        </button>
      </div>
    </>
  );
};

export default ActionButtons;
