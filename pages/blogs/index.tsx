import { NextPage } from "next";
import React, { useState } from "react";
import BlogCard from "../../components/card/BlogCard";
import FeaturedBlogCard from "../../components/card/FeaturedBlogCard";
import HeadDocument from "../../components/HeadDocument";
import PageContainer from "../../components/container/PageContainer";
import HeroContainer from "../../components/container/HeroContainer";
import { ArticleInterface, BlogsPage } from "../../utils/vars";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../utils/firebase";
import styles from "./styles.module.scss";

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
        {/* <HeroContainer
          pageName="All Blog Posts"
          type="All"
          setShowFeatured={setShowFeatured}
          showSearch
        /> */}

        {showFeatured && Boolean(featuredBlogs.length) && (
          <div className={styles["featured-blog-card"]}>
            <div className={styles["cards-wrapper"]}>
              <div>
                {featuredBlogs.map((blog) => (
                  <FeaturedBlogCard
                    key={blog.id}
                    thumbnail_image={blog.thumbnail_image}
                    title={blog.title}
                    category={blog.category}
                    created_at={blog.created_at}
                    excerpt={blog.excerpt}
                    slug={blog.slug}
                  />
                ))}
              </div>
            </div>
            <div className={styles["buttons-wrapper"]}>
              {[...Array(featuredBlogs.length).keys()].map((el) => {
                console.info(featuredBlogIndex, el);

                const selected = featuredBlogIndex === el;

                return (
                  <button
                    {...{ selected }}
                    key={`${Math.random()}`}
                    className={styles["button-pagination"]}
                    onClick={() => featuredBlogIndexHandler(el)}
                  >
                    <span className="text-base">{el + 1}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* <section className="all-blogs-container w-full flex flex-wrap justify-between mb-4">
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
        </section> */}
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
  })) as ArticleInterface[];

  // decending date posted sorting (newest blog to oldest)
  blogs.sort((a, b) => b.created_at - a.created_at);

  return {
    props: { blogs },
    revalidate: 10,
  };
}
