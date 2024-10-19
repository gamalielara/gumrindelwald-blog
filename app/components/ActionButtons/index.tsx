"use client";

import React, { useContext, useEffect, useMemo, useState } from "react";
import styles from "./styles.module.scss";
import { LocalStorageKey } from "<utils>/constants";
import { Article } from "<utils>/types";
import { ClientContext } from "<utils>/clientContext";
import ApiService from "<utils>/apiService";

type Props = {
  article: Article;
};

const ActionButtons: React.FC<Props> = ({ article }) => {
  const { likes, comments, getLikesAndCommentOfThisblog, setLikes } =
    useContext(ClientContext);
  const { id: articleId } = article;

  const [isLiked, setIsLiked] = useState(false);

  const getThisUserLikesList = () => {
    if (typeof window === "undefined") return [];

    return JSON.parse(
      localStorage.getItem(LocalStorageKey.LIKES) ?? "[]"
    ) as string[];
  };

  const thisUserCurrentLikesList = getThisUserLikesList();

  const isAlreadyLikedThisPost = thisUserCurrentLikesList.includes(articleId);

  useEffect(() => {
    getLikesAndCommentOfThisblog();
    setIsLiked(isAlreadyLikedThisPost);
  }, []);

  const onLikeClickHandler = async () => {
    let newLikeList: string[];

    if (isAlreadyLikedThisPost) {
      // Unlike this post
      newLikeList = thisUserCurrentLikesList.filter((id) => id !== articleId);
    } else {
      newLikeList = [...thisUserCurrentLikesList];
      newLikeList.push(articleId);
    }

    await ApiService.postLike(articleId, isAlreadyLikedThisPost);

    // Update likes locally
    localStorage.setItem(LocalStorageKey.LIKES, JSON.stringify(newLikeList));
    setLikes(likes + (isAlreadyLikedThisPost ? -1 : 1));
    setIsLiked(!isAlreadyLikedThisPost);
  };

  const onCommentHandler = () => {
    const offset =
      document.getElementById("navbar-top-header")!.clientHeight + 20;

    const commentSection = document.getElementById("comment-section")!;

    const elementPosition =
      commentSection.getBoundingClientRect().top + window.scrollY;

    const scrollToPosition = elementPosition - offset;

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles["action-buttons-wrapper"]}>
      <button
        className={`${styles["action-button"]} ${styles["action-button--like"]}`}
        data-has-action={isLiked}
        onClick={onLikeClickHandler}
      >
        {likes}
      </button>
      <button
        className={`${styles["action-button"]} ${styles["action-button--comment"]}`}
        onClick={onCommentHandler}
      >
        {comments.length}
      </button>
    </div>
  );
};

export default ActionButtons;
