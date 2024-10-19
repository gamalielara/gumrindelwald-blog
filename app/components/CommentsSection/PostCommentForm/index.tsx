"use client";

import React, { MouseEventHandler, useContext, useRef, useState } from "react";
import styles from "./styles.module.scss";
import ApiService from "<utils>/apiService";
import { ClientContext } from "<utils>/clientContext";
import { showToast } from "<utils>/showToast";

interface Props {
  blogId: string;
}

const PostCommentForm: React.FC<Props> = ({ blogId }) => {
  const { getLikesAndCommentOfThisblog } = useContext(ClientContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const submitCommentHandler: MouseEventHandler<HTMLInputElement> = async (
    e
  ) => {
    e.preventDefault();

    if (!username || !body) {
      const missingFields = [];

      if (!username) {
        missingFields.push("username");
      }

      if (!body) {
        missingFields.push("comment content");
      }
      showToast(`You need to fill your ${missingFields.join(" and ")}`);
      return;
    }

    if (
      email &&
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      showToast("Oops, seems your email format is not correct.");
      return;
    }

    try {
      await ApiService.postComment({
        blogId,
        username,
        email,
        body,
      });

      showToast("Your comment has successfully been posted!😆");
      getLikesAndCommentOfThisblog();

      setUsername("");
      setEmail("");
      setBody("");
    } catch (err) {
      showToast(err);
    }
  };

  return (
    <section className={styles["post-comment-form"]}>
      <form className={styles["comment-form"]}>
        <h4>Post your comment here</h4>
        <input
          required
          type="text"
          placeholder="Enter your name here"
          className={styles["comment-section-input"]}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          placeholder="Enter your email (optional, fill this if you want to get email notification if someone replies.)"
          type="email"
          className={styles["comment-section-input"]}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <textarea
          required
          placeholder="Enter your comment here..."
          className={styles["insert-comment-field"]}
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <input
          className={styles["submit-comment-btn"]}
          type="submit"
          value="Post Comment"
          onClick={submitCommentHandler}
        />
      </form>
    </section>
  );
};

export default PostCommentForm;
