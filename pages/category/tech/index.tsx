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
      <HeadDocument docTitle="Tech Blogs" />
      <PageContainer>
        <HeroContainer pageName="All Tech Blogs" type="Tech" />
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
  const techBlogs = await queryBlogs({
    field: "category",
    value: Category.TECHNOLOGY,
  });

  techBlogs.sort((a, b) => b.created_at - a.created_at);

  return {
    props: { blogs: techBlogs },
    revalidate: 10,
  };
}
