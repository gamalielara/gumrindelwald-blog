import BlogCard from "<components>/BlogCard";
import PageContainer from "<components>/container/PageContainer";
import ApiService from "<utils>/apiService";
import { Category } from "<utils>/constants";
import React from "react";
import styles from "./styles.module.scss";

interface Props {
  category: Category;
}

const CategoryPage: React.FC<Props> = async ({ category }) => {
  const blogs = await ApiService.getArticlesCategory(category);

  return (
    <PageContainer>
      {blogs.length ? (
        <section className={styles["blog-cards-section"]}>
          {blogs.map((blog, i) => (
            <BlogCard
              key={blog.title}
              thumbnail_image={blog.thumbnail_image}
              title={blog.title}
              category={blog.category}
              excerpt={blog.excerpt}
              created_at={blog.created_at}
              slug={blog.slug}
              i={i + 1}
              language={blog.language}
            />
          ))}
        </section>
      ) : (
        <h1 className={styles["no-blog-text"]}>No blogs</h1>
      )}
    </PageContainer>
  );
};

export default CategoryPage;
