import { Article } from "<utils>/types";
import styles from "./styles.module.scss";
import FeaturedBlogCard from "<components>/FeaturedBlogCard";

interface Props {
  featuredBlogs: Article[];
}

const HighlightedBlogs: React.FC<Props> = ({ featuredBlogs }) => {
  return (
    <section className={styles["highlighted-blog-section"]}>
      <h3 className={styles["highlighted-blogs-title"]}>Highlighted Blogs</h3>
      <ul>
        {featuredBlogs.map((blog) => {
          const {
            thumbnail_image,
            category,
            excerpt,
            created_at,
            slug,
            title,
          } = blog;

          return (
            <li>
              <FeaturedBlogCard
                thumbnail_image={thumbnail_image}
                category={category}
                excerpt={excerpt}
                created_at={created_at}
                slug={slug}
                title={title}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HighlightedBlogs;
