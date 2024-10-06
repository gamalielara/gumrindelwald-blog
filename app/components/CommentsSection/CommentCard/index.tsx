import React from "react";
import styles from "./styles.module.scss";
import meIcon from "<assets>/svg/me.svg";

type Props = {
  username: string;
  date: number; // epoch
  body: number;
};

const CommentCard: React.FC<Props> = () => {
  return (
    <div className={styles["card-wrapper"]}>
      <img src={meIcon.src} className={styles["avatar"]} />
      <div className={styles["card"]}>
        <h4>Ara Gamaliel (Author)</h4>
        <h5>Wednesday, Dec 31 2024</h5>
        <p className={styles["comment-body"]}>
          Hey, this is a great idea! Hey, this is a great idea! Hey, this is a
          great idea! Hey, this is a great idea! Hey, this is a great idea! Hey,
          this is a great idea! Hey, this is a great idea! Hey, this is a great
          idea! Hey, this is a great idea! Hey, this is a great idea! Hey, this
          is a great idea!
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
