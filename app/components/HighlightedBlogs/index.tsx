import styles from "./styles.module.scss";

const HighlightedBlogs: React.FC = () => {
  return (
    <section className={styles["highlighted-blog-section"]}>
      <h3 className={styles["highlighted-blogs-title"]}>Highlighted Blogs</h3>
    </section>
  );
};

export default HighlightedBlogs;
