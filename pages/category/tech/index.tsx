import React from "react";
import { NextPage } from "next";
import BlogCard from "../../../components/BlogCard";
import HeadDocument from "../../../components/HeadDocument";
import PageContainer from "../../../components/container/PageContainer";
import HeroContainer from "../../../components/container/HeroContainer";
import { BlogsPage, Category } from "../../../utils/vars";
import { queryBlogs } from "../../../utils/helpers";

const CategoryPage: NextPage<BlogsPage> = ({ blogs }) => {
  return (
    <>
      <HeadDocument docTitle="Technology Blogs" />
      <PageContainer>
        <HeroContainer pageName="All Technology Blogs" type="Tech" />
        <section className="all-blogs-container w-full flex flex-wrap justify-evenly mb-4">
          {blogs.length > 0 ? (
            blogs.map((article) => (
              <BlogCard
                key={article.title}
                thumbnail_image={article.thumbnail_image}
                title={article.title}
                category={article.category}
                excerpt={article.excerpt}
                created_at={article.created_at}
                slug={article.slug}
              />
            ))
          ) : (
            <h1 className="text-xl text-center my-8 mx-auto font-bold">
              No blogs
            </h1>
          )}
        </section>
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

  return {
    props: { blogs: techBlogs },
    revalidate: 10,
  };
}
