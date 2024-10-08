"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { LocalStorageKey } from "<utils>/constants";

type Props = {
  articleId: string;
};

const ActionButtons: React.FC<Props> = ({ articleId }) => {
  const [isLiked, setIsLiked] = useState(false);

  const thisUserLikeList = JSON.parse(
    localStorage.getItem(LocalStorageKey.LIKES) ?? "[]"
  ) as string[];

  const isAlreadyLikedThisPost = thisUserLikeList.includes(articleId);

  useEffect(() => {
    setIsLiked(isAlreadyLikedThisPost);
  }, []);

  const onLikeClickHandler = () => {
    let newLikeList: string[];

    if (isAlreadyLikedThisPost) {
      newLikeList = thisUserLikeList.filter((id) => id !== articleId);
    } else {
      newLikeList = [...thisUserLikeList];
      newLikeList.push(articleId);
    }

    localStorage.setItem(LocalStorageKey.LIKES, JSON.stringify(newLikeList));

    setIsLiked(!isAlreadyLikedThisPost);
  };

  const onCommentHandler = () => {
    document
      .getElementById("comment-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles["action-buttons-wrapper"]}>
      <button
        className={`${styles["action-button"]} ${styles["action-button--like"]}`}
        data-has-action={isLiked}
        onClick={onLikeClickHandler}
      >
        19
      </button>
      <button
        className={`${styles["action-button"]} ${styles["action-button--comment"]}`}
        onClick={onCommentHandler}
      >
        100
      </button>
    </div>
  );
};

export default ActionButtons;
