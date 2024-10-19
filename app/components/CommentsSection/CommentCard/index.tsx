import React from "react";
import styles from "./styles.module.scss";
import meIcon from "<assets>/svg/me.svg";

type Props = {
  username: string;
  date: number; // epoch
  body: string;
  userProfilePicture: string;
  isAuthor: boolean;
};

const CommentCard: React.FC<Props> = (props) => {
  const { username, date, body, userProfilePicture, isAuthor } = props;

  return (
    <div className={styles["card-wrapper"]}>
      <img
        src={isAuthor ? meIcon.src : userProfilePicture}
        className={styles["avatar"]}
      />
      <div className={styles["card"]}>
        <h4>{`${username} ${isAuthor ? "(Author)" : ""}`}</h4>
        <h5> {new Date(date).toDateString()}</h5>
        <p className={styles["comment-body"]}>{body}</p>
      </div>
    </div>
  );
};

export default CommentCard;
