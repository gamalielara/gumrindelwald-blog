import PageContainer from "<components>/container/PageContainer";
import ApiService from "<utils>/apiService";
import { Category, MENUS } from "<utils>/constants";
import React from "react";
import styles from "./styles.module.scss";
import BlogCardList from "<components>/BlogCardList";

interface Props {
  category: Category;
  route: ( typeof MENUS )[keyof typeof MENUS]["url"];
}

const CategoryPage: React.FC<Props> = async ({ category, route }) => {
  const blogs = await ApiService.getArticlesCategory(category);

  return (
    <PageContainer selectedRoute={ route }>
      <h1 className={ styles["category-title"] }>
        { category.replace("_", " ") } Blogs
      </h1>
      <div className={ styles["blog-card-wrapper"] }>
        { blogs.length ? (
          <BlogCardList blogs={ blogs } isInLandingPage/>
        ) : (
          <h1 className={ styles["no-blog-text"] }>No blogs</h1>
        ) }
      </div>
    </PageContainer>
  );
};

export default CategoryPage;
