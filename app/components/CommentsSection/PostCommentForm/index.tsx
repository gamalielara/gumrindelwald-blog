"use client";

import React, { useContext, useState, } from "react";
import styles from "./styles.module.scss";
import ApiService from "<utils>/apiService";
import { ClientContext } from "<utils>/clientContext";
import { showToast } from "<utils>/showToast";
import useDebounce from "../../../../hooks/useDebounce";

interface Props {
  blogId: string;
}

const PostCommentForm: React.FC<Props> = ({ blogId }) => {
  const { getLikesAndCommentOfThisblog } = useContext(ClientContext);
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ body, setBody ] = useState("");

  const submitCommentHandler = async () => {
    if ( !body ) {
      showToast("You need to fill your comment content");
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

  const debouncedPostCommentHandlder = useDebounce(submitCommentHandler, 10000);

  return (
    <section className={ styles["post-comment-form"] }>
      <form className={ styles["comment-form"] }>
        <h4>Post your comment here</h4>
        <input
          type="text"
          placeholder="Enter your name here (Optional)"
          className={ styles["comment-section-input"] }
          value={ username }
          onChange={ (e) => {
            setUsername(e.target.value);
          } }
        />
        <textarea
          required
          placeholder="Enter your comment here..."
          className={ styles["insert-comment-field"] }
          value={ body }
          onChange={ (e) => {
            setBody(e.target.value);
          } }
        />
        <input
          className={ styles["submit-comment-btn"] }
          type="submit"
          value="Post Comment"
          onClick={ (e) => {
            e.preventDefault();
            debouncedPostCommentHandlder();
          } }
        />
      </form>
    </section>
  );
};

export default PostCommentForm;
