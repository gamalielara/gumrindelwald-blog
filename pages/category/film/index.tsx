import React from "react";
import { NextPage } from "next";
import BlogCard from "../../../components/card/BlogCard";
import HeadDocument from "../../../components/HeadDocument";
import PageContainer from "../../../components/container/PageContainer";
import HeroContainer from "../../../components/container/HeroContainer";
import { BlogsPage, Category } from "../../../utils/vars";
import { queryBlogs } from "../../../utils/helpers";

const CategoryPage: NextPage<BlogsPage> = ({ blogs }) => {
  return (
    <>
      <HeadDocument docTitle="Book Blogs" />
      <PageContainer>
        <HeroContainer pageName="All Book Blogs" type="Book" />
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
  const filmBlogs = await queryBlogs({
    field: "category",
    value: Category.FILM,
  });

  return {
    props: { blogs: filmBlogs },
    revalidate: 10,
  };
}
