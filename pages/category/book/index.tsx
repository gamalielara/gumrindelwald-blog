import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import BlogCard from "../../../components/card/BlogCard";
import HeadDocument from "../../../components/HeadDocument";
import PageContainer from "../../../components/container/PageContainer";
import HeroContainer from "../../../components/container/HeroContainer";
import { BlogsPage } from "../../../utils/vars";
import { gql, GraphQLClient } from "graphql-request";
import { graphcms } from "../../../utils/vars";

const QUERY = gql`
  query Posts {
    posts(where: { category: Book }, orderBy: datePosted_DESC) {
      category
      datePosted
      id
      slug
      title
      excerpt
      tags
      language
      thumbnail {
        url
      }
    }
  }
`;

const CategoryPage: NextPage<BlogsPage> = ({ posts }) => {
  return (
    <>
      <HeadDocument docTitle="Book Blogs" />
      <PageContainer>
        <HeroContainer pageName="All Book Blogs" type="Book" />
        <section className="all-blogs-container w-full flex flex-wrap justify-evenly mb-4">
          {posts.length > 0 ? (
            posts.map((article) => (
              <BlogCard
                key={article.title}
                thumbnail={article.thumbnail}
                title={article.title}
                category={article.category}
                excerpt={article.excerpt}
                datePosted={article.datePosted}
                slug={article.slug}
                featured={article.featured}
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
  const query = await graphcms.request(QUERY);
  return {
    props: query,
    revalidate: 10,
  };
}
