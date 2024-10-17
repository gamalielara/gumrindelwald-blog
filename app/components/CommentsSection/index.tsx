"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import CommentCard from "./CommentCard";
import PostCommentForm from "./PostCommentForm";
import ApiService from "<utils>/apiService";
import { ClientContext } from "<utils>/clientContext";
import { ClientActionType } from "<utils>/constants";

interface Props {
  blogId: string;
}

const CommentsSection: React.FC<Props> = ({ blogId }) => {
  const { comments, dispatch } = useContext(ClientContext);

  const fetchComments = async () => {
    const comments = await ApiService.getCommentsOfThisArtcile(blogId);
    dispatch({ type: ClientActionType.UPDATE_COMMENTS, value: comments });
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <section className={styles["comment-section"]} id="comment-section">
        <h2 className={styles["comment-title"]}>
          {comments.length} Comment{comments.length > 1 && "s"}
        </h2>
        {comments.map(({ username, timestamp, body, id }) => (
          <CommentCard
            key={id}
            username={username}
            date={timestamp}
            body={body}
          />
        ))}
      </section>
      <PostCommentForm blogId={blogId} fetchComments={fetchComments} />
    </>
  );
};

export default CommentsSection;
