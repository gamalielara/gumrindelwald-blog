import { NextPage } from "next";
import React from "react";
import BlogCard from "../../BlogCard";
import PageContainer from "../../container/PageContainer";
import styles from "./styles.module.scss";
import ApiService from "../../../utils/apiService";
import HighlightedBlogs from "<components>/HighlightedBlogs";
import BlogCardList from "<components>/BlogCardList";
import Logo from "<components>/Logo";

const BlogsPage: NextPage = async () => {
  const allBlogs = await ApiService.getAllArticles();

  const featuredBlogs = allBlogs.filter((blog) => blog.featured);

  return (
    <>
      <PageContainer isInLP>
        <section className={styles["main-banner"]}>
          <Logo shouldAnimate isInLandingPage />
        </section>
        <HighlightedBlogs featuredBlogs={featuredBlogs} />
        <BlogCardList blogs={allBlogs} isInLandingPage />
      </PageContainer>
    </>
  );
};

export default BlogsPage;
