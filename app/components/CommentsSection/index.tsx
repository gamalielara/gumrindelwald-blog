"use client";

import React, { useContext } from "react";
import styles from "./styles.module.scss";
import CommentCard from "./CommentCard";
import PostCommentForm from "./PostCommentForm";
import { ClientContext } from "<utils>/clientContext";

interface Props {
  blogId: string;
}

const CommentsSection: React.FC<Props> = ({ blogId }) => {
  const { comments } = useContext(ClientContext);

  return (
    <>
      <section className={styles["comment-section"]} id="comment-section">
        <h2 className={styles["comment-title"]}>
          {comments.length} Comment{comments.length > 1 && "s"}
        </h2>
        {comments.map(
          ({ username, timestamp, body, userProfilePicture, isAuthor, id }) => (
            <CommentCard
              key={id}
              username={username}
              date={timestamp}
              body={body}
              userProfilePicture={userProfilePicture}
              isAuthor={isAuthor}
            />
          )
        )}
      </section>
      <PostCommentForm blogId={blogId} />
    </>
  );
};

export default CommentsSection;
