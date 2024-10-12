import React from "react";
import styles from "./styles.module.scss";
import CommentCard from "./CommentCard";
import { Comment } from "<utils>/types";
import PostCommentForm from "./PostCommentForm";

interface Props {
  comments: Array<Comment>;
}

const CommentsSection: React.FC<Props> = ({ comments }) => {
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
      <PostCommentForm />
    </>
  );
};

export default CommentsSection;
