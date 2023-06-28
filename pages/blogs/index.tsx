import { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import BlogCard from "../../components/BlogCard";
import FeaturedBlogCard from "../../components/FeaturedBlogCard";
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
  const [maxBlogCardHeight, setMaxBlogCardHeight] = useState(0);
  const [hoveredBlogIndex, setHoveredBlogIndex] = useState<number | null>(null);

  const featuredBlogs = blogs.filter((post) => post.featured);

  const blogCardRef = useRef<HTMLDivElement>(null);
  const featuredBlogsCarousel = useRef<HTMLDivElement>(null);
  const buttonsWrapper = useRef<HTMLDivElement>(null);
  const blogCardsRef = useRef<HTMLDivElement[]>([]);
  const blogSectionGridRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let h = 0;

    // Not working in small devices (phone until tablet)
    console.info(window.innerWidth, window.innerWidth < 790);
    if (window.innerWidth < 768) return;

    blogCardsRef.current.forEach((el) => {
      if (h < el.clientHeight) h = el.clientHeight;

      const blogGroups = [
        null,
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12],
        [13, 14, 15],
      ];

      el.onmouseenter = () => {
        const idx = Number(el.className.match(/.*-(\d+)/)?.[1]) ?? null;
        const group = Math.ceil(idx / 3);
        const blogIdxs = blogGroups[group];

        blogIdxs?.forEach((ix) => {
          if (ix !== idx) {
            blogCardsRef.current[ix - 1].className += " blog-card-hidden";
          }
        });

        setHoveredBlogIndex(idx);
      };

      el.onmouseleave = () => {
        setHoveredBlogIndex(null);
        blogCardsRef.current.forEach(
          (el) => (el.className = el.className.replace("blog-card-hidden", ""))
        );
      };
    });

    setMaxBlogCardHeight(h);
  }, [blogs, blogCardsRef.current, blogCardsRef.current.length]);

  useEffect(() => {
    const sectionGrid = blogSectionGridRef.current;
    if (maxBlogCardHeight > 0 && sectionGrid) {
      sectionGrid.style.gridTemplateRows = `repeat(5, ${maxBlogCardHeight}px)`;
    }
  }, [maxBlogCardHeight, blogSectionGridRef.current]);

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
        -1 * featuredBlogIndex * (blogCardRef.current?.offsetWidth ?? 0)
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
          <div className={styles["featured-blog-card"]} ref={blogCardRef}>
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

        <section
          className={styles["blog-cards-section"]}
          ref={blogSectionGridRef}
        >
          {blogs &&
            blogs.map((blog, i) => {
              return (
                <BlogCard
                  ref={(el: any) => {
                    const curr = blogCardsRef?.current;
                    if (curr) {
                      curr[i] = el;
                    }
                  }}
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
