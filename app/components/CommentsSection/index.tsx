import React from "react";
import styles from "./styles.module.scss";

const CommentsSection = () => {
  return (
    <>
      <hr className={styles["divider"]} />
      <div className={styles["comment-section"]}>
        <h2>10 Comment(s)</h2>
      </div>
    </>
  );
};

export default CommentsSection;
