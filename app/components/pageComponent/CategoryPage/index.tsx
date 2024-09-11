import BlogCard from "<components>/BlogCard";
import PageContainer from "<components>/container/PageContainer";
import ApiService from "<utils>/apiService";
import { Category } from "<utils>/constants";
import React from "react";
import styles from "./styles.module.scss";
import BlogCardList from "<components>/BlogCardList";

interface Props {
  category: Category;
}

const CategoryPage: React.FC<Props> = async ({ category }) => {
  const blogs = await ApiService.getArticlesCategory(category);

  return (
    <PageContainer>
      <h1 className={styles["category-title"]}>{category} Blogs</h1>
      {blogs.length ? (
        <BlogCardList blogs={blogs} isInLandingPage />
      ) : (
        <h1 className={styles["no-blog-text"]}>No blogs</h1>
      )}
    </PageContainer>
  );
};

export default CategoryPage;
