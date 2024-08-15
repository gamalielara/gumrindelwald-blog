import React from "react";
import styles from "./styles.module.scss";
import { Article } from "<utils>/types";
import BlogCard from "<components>/BlogCard";

interface IBlogCardListProps {
  articles: Article;
  isInLandingPage?: boolean;
}

const BlogCardList: React.FC<IBlogCardListProps> = ({
  articles,
  isInLandingPage = false,
}) => {
  const { documents: blogs } = articles;

  return (
    <section
      className={styles["blog-cards-section"]}
      data-type={isInLandingPage ? "landingpage" : "general"}
    >
      {Boolean(blogs?.length) &&
        blogs.map((blog, i) => {
          const {
            title,
            thumbnail_image,
            category,
            excerpt,
            created_at,
            slug,
            language,
          } = blog.fields;

          return (
            <BlogCard
              key={title}
              thumbnail_image={thumbnail_image}
              title={title}
              category={category}
              excerpt={excerpt}
              created_at={created_at}
              slug={slug}
              i={i + 1}
              language={language}
            />
          );
        })}
    </section>
  );
};

export default BlogCardList;
