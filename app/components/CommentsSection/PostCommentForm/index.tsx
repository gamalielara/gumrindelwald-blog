"use client";

import React, { MouseEventHandler, useContext, useRef, useState } from "react";
import styles from "./styles.module.scss";
import ApiService from "<utils>/apiService";
import { ClientContext } from "<utils>/clientContext";

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
      // TODO: show toast validate username and body
      return;
    }

    if (
      email &&
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      // TODO: show toast Validate valid email
      return;
    }

    try {
      await ApiService.postComment({
        blogId,
        username,
        email,
        body,
      });

      // TODO: show successful toast
      console.log("SUCCESS!");
      getLikesAndCommentOfThisblog();

      setUsername("");
      setEmail("");
      setBody("");
    } catch (err) {
      //TODO: show error toast
      console.log("There is something wrong", err);
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
