import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import BlogCard from "../../components/card/BlogCard";
import LatestBlogCard from "../../components/card/LatestBlogCard";
import HeadDocument from "../../components/HeadDocument";
import PageContainer from "../../components/container/PageContainer";
import HeroContainer from "../../components/container/HeroContainer";
import { BlogCardInterface, BlogsPage, StateInterface } from "../../utils/vars";
import { gql } from "graphql-request";
import { graphcms } from "../../utils/vars";
import { useDispatch, useSelector } from "react-redux";
import { setArticles } from "../../redux/articlesSlice";

const QUERY = gql`
  {
    posts(orderBy: datePosted_DESC) {
      category
      datePosted
      id
      slug
      title
      featured
      content {
        html
      }
      keywords
      excerpt
      thumbnail {
        url
      }
    }
  }
`;

const Blogs: NextPage<BlogsPage> = ({ posts }) => {
  const [showFeatured, setShowFeatured] = useState<boolean>(true);
  const featuredBlogs = posts.filter((post) => post.featured);
  const featuredBlog = featuredBlogs[featuredBlogs.length - 1];
  const articles: BlogCardInterface[] = useSelector(
    (state: StateInterface) => state.articles.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setArticles(posts));
  }, []);

  return (
    <>
      <HeadDocument docTitle="All Blogs" />
      <PageContainer>
        <HeroContainer
          pageName="All Blog Posts"
          type="All"
          setShowFeatured={setShowFeatured}
          showSearch
        />

        {showFeatured && (
          <LatestBlogCard
            thumbnail={featuredBlog.thumbnail}
            title={featuredBlog.title}
            category={featuredBlog.category}
            datePosted={featuredBlog.datePosted}
            excerpt={featuredBlog.excerpt}
            slug={featuredBlog.slug}
            featured={featuredBlog.featured}
          />
        )}

        <section className="all-blogs-container w-full flex flex-wrap justify-evenly lg:justify-between mb-4">
          {articles &&
            articles.map((blog) => (
              <BlogCard
                key={blog.title}
                thumbnail={blog.thumbnail}
                title={blog.title}
                category={blog.category}
                excerpt={blog.excerpt}
                datePosted={blog.datePosted}
                slug={blog.slug}
                featured={blog.featured}
              />
            ))}
        </section>
      </PageContainer>
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  const blogs = await graphcms.request(QUERY);
  return {
    props: blogs,
    revalidate: 10,
  };
}
