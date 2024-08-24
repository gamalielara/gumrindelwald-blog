import { NextPage } from "next";
import React from "react";
import BlogCard from "../components/BlogCard";
import HeadDocument from "../components/HeadDocument";
import PageContainer from "../components/container/PageContainer";
import styles from "./styles.module.scss";
import ApiService from "../utils/apiService";
import HighlightedBlogs from "<components>/HighlightedBlogs";
import BlogCardList from "<components>/BlogCardList";
import Logo from "<components>/Logo";

const Blogs: NextPage = async () => {
  const allBlogs = await ApiService.getAllBlogs();

  const featuredBlogs = allBlogs.filter((blog) => blog.featured);

  return (
    <>
      <HeadDocument docTitle="All Blogs" />
      <PageContainer pageName="all-blogs-page" isInLP>
        <section className={styles["main-banner"]}>
          <Logo fontColor="black" shouldAnimate isInLandingPage />
        </section>
        <HighlightedBlogs featuredBlogs={featuredBlogs} />
        <BlogCardList blogs={allBlogs} isInLandingPage />
      </PageContainer>
    </>
  );
};

export default Blogs;
