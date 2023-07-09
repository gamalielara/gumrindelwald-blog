import React from "react";
import { NextPage } from "next";
import BlogCard from "../../../components/BlogCard";
import HeadDocument from "../../../components/HeadDocument";
import PageContainer from "../../../components/container/PageContainer";
import HeroContainer from "../../../components/HeroContainer";
import { BlogsPage, Category } from "../../../utils/vars";
import { queryBlogs } from "../../../utils/helpers";
import styles from "../styles.module.scss";

const CategoryPage: NextPage<BlogsPage> = ({ blogs }) => {
  return (
    <>
      <HeadDocument docTitle="Film Blogs" />
      <PageContainer pageName="film-blogs-page">
        <HeroContainer pageName="All Film Blogs" type="Film" />
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
              />
            ))}
          </section>
        ) : (
          <h1 className={styles["no-blog-text"]}>No blogs</h1>
        )}
      </PageContainer>
    </>
  );
};

export default CategoryPage;

export async function getStaticProps() {
  const filmBlogs = await queryBlogs({
    field: "category",
    value: Category.FILM,
  });

  filmBlogs.sort((a, b) => b.created_at - a.created_at);

  return {
    props: { blogs: filmBlogs },
    revalidate: 10,
  };
}
