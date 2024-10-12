import React from "react";
import styles from "./styles.module.scss";
import meIcon from "<assets>/svg/me.svg";

type Props = {
  username: string;
  date: number; // epoch
  body: string;
};

const CommentCard: React.FC<Props> = ({ username, date, body }) => {
  return (
    <div className={styles["card-wrapper"]}>
      <img src={meIcon.src} className={styles["avatar"]} />
      <div className={styles["card"]}>
        <h4>{username}</h4>
        <h5> {new Date(date).toDateString()}</h5>
        <p className={styles["comment-body"]}>{body}</p>
      </div>
    </div>
  );
};

export default CommentCard;
