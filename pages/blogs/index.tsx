import { NextPage } from "next";
import React, { useState } from "react";
import BlogCard from "../../components/card/BlogCard";
import FeaturedBlogCard from "../../components/card/FeaturedBlogCard";
import HeadDocument from "../../components/HeadDocument";
import PageContainer from "../../components/container/PageContainer";
import HeroContainer from "../../components/container/HeroContainer";
import { BlogsPage } from "../../utils/vars";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../utils/firebase";

const Blogs: NextPage<BlogsPage> = ({ blogs }) => {
  const [showFeatured, setShowFeatured] = useState<boolean>(true);
  const [featuredBlogIndex, setFeaturedBlogIndex] = useState(0);
  const featuredBlogs = blogs.filter((post) => post.featured);

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

        {showFeatured && Boolean(featuredBlogs.length) && (
          <div className="latest-blog-card my-8">
            <FeaturedBlogCard
              thumbnail_image={featuredBlogs[featuredBlogIndex].thumbnail_image}
              title={featuredBlogs[featuredBlogIndex].title}
              category={featuredBlogs[featuredBlogIndex].category}
              created_at={featuredBlogs[featuredBlogIndex].created_at}
              excerpt={featuredBlogs[featuredBlogIndex].excerpt}
              slug={featuredBlogs[featuredBlogIndex].slug}
            />
            <div className="buttons flex justify-center mx-auto gap-8 w-1/2">
              {[...Array(featuredBlogs.length).keys()].map((el) => (
                <button
                  key={`${Math.random()}`}
                  className={`${
                    featuredBlogIndex === el
                      ? "bg-black text-white"
                      : "bg-gray-300"
                  } rounded-full w-8 h-8 flex items-center justify-center`}
                  onClick={() => featuredBlogIndexHandler(el)}
                >
                  <span className="text-base">{el + 1}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <section className="all-blogs-container w-full flex flex-wrap justify-between mb-4">
          {blogs &&
            blogs.map((blog) => (
              <BlogCard
                key={blog.title}
                thumbnail_image={blog.thumbnail_image}
                title={blog.title}
                category={blog.category}
                excerpt={blog.excerpt}
                created_at={blog.created_at}
                slug={blog.slug}
              />
            ))}
        </section>
      </PageContainer>
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  const blogsRef = collection(db, "blogs");
  const rawBlogs = await getDocs(blogsRef);
  const blogs = rawBlogs.docs.map((blogDoc) => ({
    ...blogDoc.data(),
    id: blogDoc.id,
  }));
  console.log({ blogs });

  return {
    props: { blogs },
    revalidate: 10,
  };
}
