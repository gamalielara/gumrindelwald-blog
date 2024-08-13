import { NextPage } from "next";
import React from "react";
import BlogCard from "../components/BlogCard";
import HeadDocument from "../components/HeadDocument";
import PageContainer from "../components/container/PageContainer";
import styles from "./styles.module.scss";
import ApiService from "../utils/apiService";

const Blogs: NextPage = async () => {
  const { documents: blogs } = await ApiService.getAllBlogs();

  return (
    <>
      <HeadDocument docTitle="All Blogs"/>
      <PageContainer pageName="all-blogs-page" isInLP>
        <section className={ styles["main-banner"] }>
          <h1 className={ styles["gumrindelwald-title"] }>gumrindel<em>wald</em></h1>
          <h3 className={ styles["gumrindelwald-subtitle"] }>Ara Gamaliel Boanerges's Personal Blog</h3>
        </section>
        <section className={ styles["blog-cards-section"] }>
          { Boolean(blogs?.length) &&
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
                  key={ title }
                  thumbnail_image={ thumbnail_image }
                  title={ title }
                  category={ category }
                  excerpt={ excerpt }
                  created_at={ created_at }
                  slug={ slug }
                  i={ i + 1 }
                  language={ language }
                />
              );
            }) }
        </section>
      </PageContainer>
    </>
  );
};

export default Blogs;
