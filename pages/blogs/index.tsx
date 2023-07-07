import { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import BlogCard from "../../components/BlogCard";
import FeaturedBlogCard from "../../components/FeaturedBlogCard";
import HeadDocument from "../../components/HeadDocument";
import PageContainer from "../../components/container/PageContainer";
import HeroContainer from "../../components/HeroContainer";
import { ArticleInterface, BlogsPage } from "../../utils/vars";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../utils/firebase";
import styles from "./styles.module.scss";

const Blogs: NextPage<BlogsPage> = ({ blogs }) => {
  const [showFeatured, setShowFeatured] = useState<boolean>(true);
  const [featuredBlogIndex, setFeaturedBlogIndex] = useState(0);

  const featuredBlogs = blogs.filter((post) => post.featured);

  const featuredBlogCardRef = useRef<HTMLDivElement>(null);
  const featuredBlogsCarousel = useRef<HTMLDivElement>(null);
  const buttonsWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carouselIndex = setInterval(() => {
      setFeaturedBlogIndex((index) => {
        if (index < featuredBlogs.length - 1) {
          return index + 1;
        } else {
          return 0;
        }
      });
    }, 5000);

    const paginationButtons = buttonsWrapper.current;

    if (paginationButtons) {
      paginationButtons.onclick = () => clearInterval(carouselIndex);
    }

    return () => clearInterval(carouselIndex);
  }, []);

  useEffect(() => {
    const carousel = featuredBlogsCarousel?.current;

    if (carousel) {
      // card width + gap between the cards = 1rem
      const swipeAmount = `calc(${
        -1 * featuredBlogIndex * (featuredBlogCardRef.current?.offsetWidth ?? 0)
      }px - ${featuredBlogIndex}rem)`;
      carousel.style.transform = `translateX(${swipeAmount})`;
    }
  }, [featuredBlogIndex]);

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
          <div
            className={styles["featured-blog-card"]}
            ref={featuredBlogCardRef}
          >
            <div className={styles["cards-wrapper"]}>
              <div ref={featuredBlogsCarousel}>
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
            <div className={styles["buttons-wrapper"]} ref={buttonsWrapper}>
              {[...Array(featuredBlogs.length).keys()].map((el) => {
                const selected = featuredBlogIndex === el;

                return (
                  <button
                    key={`${Math.random()}`}
                    className={`${styles["button-pagination"]} ${
                      selected ? "selected" : ""
                    }`}
                    onClick={() => {
                      setFeaturedBlogIndex(el);
                    }}
                  >
                    <span className="text-base">{el + 1}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <section className={styles["blog-cards-section"]}>
          {blogs.length &&
            blogs.map((blog, i) => {
              return (
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
              );
            })}
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
  })) as ArticleInterface[];

  // decending date posted sorting (newest blog to oldest)
  blogs.sort((a, b) => b.created_at - a.created_at);

  return {
    props: { blogs },
    revalidate: 10,
  };
}
