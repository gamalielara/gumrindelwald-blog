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
  const [featuredBlogIndex, setFeaturedBlogIndex] = useState(0);
  const featuredBlogs = posts.filter((post) => post.featured);
  const articles: BlogCardInterface[] = useSelector(
    (state: StateInterface) => state.articles.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setArticles(posts));
  }, []);

  const featuredBlogIndexHandler = (number: number) => {
    setFeaturedBlogIndex(number);
  };

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

        {showFeatured && featuredBlogs.length >= 3 && (
          <div className="latest-blog-card my-8">
            <LatestBlogCard
              thumbnail={featuredBlogs[featuredBlogIndex].thumbnail}
              title={featuredBlogs[featuredBlogIndex].title}
              category={featuredBlogs[featuredBlogIndex].category}
              datePosted={featuredBlogs[featuredBlogIndex].datePosted}
              excerpt={featuredBlogs[featuredBlogIndex].excerpt}
              slug={featuredBlogs[featuredBlogIndex].slug}
              featured={featuredBlogs[featuredBlogIndex].featured}
            />
            <div className="buttons flex justify-center mx-auto gap-8 w-1/2">
              <button
                className={`${
                  featuredBlogIndex === 0
                    ? "bg-black text-white"
                    : "bg-gray-300"
                } rounded-full w-8 h-8 flex items-center justify-center`}
                onClick={() => featuredBlogIndexHandler(0)}
              >
                <span className="text-base">1</span>
              </button>
              <button
                className={`${
                  featuredBlogIndex === 1
                    ? "bg-black text-white"
                    : "bg-gray-300"
                } rounded-full w-8 h-8 flex items-center justify-center`}
                onClick={() => featuredBlogIndexHandler(1)}
              >
                <span className="text-base">2</span>
              </button>
              <button
                className={`${
                  featuredBlogIndex === 2
                    ? "bg-black text-white"
                    : "bg-gray-300"
                } rounded-full w-8 h-8 flex items-center justify-center`}
                onClick={() => featuredBlogIndexHandler(2)}
              >
                <span className="text-base">3</span>
              </button>
            </div>
          </div>
        )}

        <section className="all-blogs-container w-full flex flex-wrap justify-between mb-4">
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
  console.log("HELLO TEST ", process.env.API_ENDPOINT)
  const blogs = await graphcms.request(QUERY);
  return {
    props: blogs,
    revalidate: 10,
  };
}
