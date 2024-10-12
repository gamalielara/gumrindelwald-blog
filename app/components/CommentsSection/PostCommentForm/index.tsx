"use client";

import React, { MouseEventHandler, useRef } from "react";
import styles from "./styles.module.scss";
import ApiService from "<utils>/apiService";

interface Props {
  blogId: string;
}

const PostCommentForm: React.FC<Props> = ({ blogId }) => {
  const usernameRef = useRef<string>();
  const emailRef = useRef<string>();
  const bodyRef = useRef<string>();

  const submitCommentHandler: MouseEventHandler<HTMLInputElement> = async (
    e
  ) => {
    e.preventDefault();

    if (!usernameRef.current || !bodyRef.current) {
      // TODO: show toast validate username and body
      return;
    }

    if (
      emailRef.current &&
      !emailRef.current.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      // TODO: show toast Validate valid email
      return;
    }

    try {
      await ApiService.postComment({
        blogId,
        username: usernameRef.current,
        email: emailRef.current,
        body: bodyRef.current,
      });

      // TODO: show successful toast
      console.log("SUCCESS!");
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
          onChange={(e) => {
            usernameRef.current = e.target.value;
          }}
        />
        <input
          placeholder="Enter your email (optional, fill this if you want to get email notification if someone replies.)"
          type="email"
          className={styles["comment-section-input"]}
          onChange={(e) => {
            emailRef.current = e.target.value;
          }}
        />
        <textarea
          required
          placeholder="Enter your comment here..."
          className={styles["insert-comment-field"]}
          onChange={(e) => {
            bodyRef.current = e.target.value;
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
