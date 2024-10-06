"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { LocalStorageKey } from "<utils>/constants";

type Props = {
  articleId: string;
};

const ActionButtons: React.FC<Props> = ({ articleId }) => {
  const [actionInfo, setActionInfo] = useState({
    isLiked: false,
    isCommented: false,
  });

  const thisUserLikeList = JSON.parse(
    localStorage.getItem(LocalStorageKey.LIKES) ?? "[]"
  ) as string[];

  const thisUserCommentList = JSON.parse(
    localStorage.getItem(LocalStorageKey.COMMENTS) ?? "[]"
  ) as string[];

  const isAlreadyLikedThisPost = thisUserLikeList.includes(articleId);

  const isAlreadyCommentedThisPost = thisUserCommentList.includes(articleId);

  useEffect(() => {
    setActionInfo({
      isCommented: isAlreadyCommentedThisPost,
      isLiked: isAlreadyLikedThisPost,
    });
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

    setActionInfo((state) => ({ ...state, isLiked: !isAlreadyLikedThisPost }));
  };

  const onCommentHandler = () => {
    let newLikeList;
    if (isAlreadyCommentedThisPost) {
      newLikeList = thisUserCommentList.filter((id) => id !== articleId);
    } else {
      newLikeList = [...thisUserCommentList];
      newLikeList.push(articleId);
    }

    localStorage.setItem(LocalStorageKey.COMMENTS, JSON.stringify(newLikeList));

    setActionInfo((state) => ({
      ...state,
      isCommented: !isAlreadyCommentedThisPost,
    }));
  };

  return (
    <>
      <hr className={styles["divider"]} />
      <h3 className={styles["action-title"]}>
        Do you enjoy reading this article? Leave your mark here! :)
      </h3>
      <div className={styles["action-buttons-wrapper"]}>
        <button
          className={`${styles["action-button"]} ${styles["action-button--like"]}`}
          data-has-action={actionInfo.isLiked}
          onClick={onLikeClickHandler}
        >
          19
        </button>
        <button
          className={`${styles["action-button"]} ${styles["action-button--comment"]}`}
          data-has-action={actionInfo.isCommented}
          onClick={onCommentHandler}
        >
          100
        </button>
      </div>
    </>
  );
};

export default ActionButtons;
