import React from "react";
import styles from "./styles.module.scss";
import CommentCard from "./CommentCard";
import { Comment } from "<utils>/types";

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

      <form className={styles["comment-form"]}>
        <h4>Post your comment here</h4>
        <input
          required
          type="text"
          placeholder="Enter your name here"
          className={styles["comment-section-input"]}
        />
        <input
          placeholder="Enter your email (optional, fill this if you want to get email notification if someone replies.)"
          type="email"
          className={styles["comment-section-input"]}
        />
        <textarea
          required
          placeholder="Enter your comment here..."
          className={styles["insert-comment-field"]}
        />
        <input
          className={styles["submit-comment-btn"]}
          type="submit"
          value="Post Comment"
        />
      </form>
    </>
  );
};

export default CommentsSection;
