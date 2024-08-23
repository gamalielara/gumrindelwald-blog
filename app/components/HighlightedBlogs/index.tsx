"use client";

import { Article } from "<utils>/types";
import styles from "./styles.module.scss";
import FeaturedBlogCard from "<components>/FeaturedBlogCard";
import { useSyncExternalStore } from "react";

interface Props {
  featuredBlogs: Article[];
}

const HighlightedBlogs: React.FC<Props> = ({ featuredBlogs }) => {
  const subscriber = (callback: () => void) => {
    const scrollingHighlightedBlogs = document.getElementById(
      "scrolling-featured-blog-list"
    );

    scrollingHighlightedBlogs!.addEventListener("scroll", callback);

    return () =>
      scrollingHighlightedBlogs!.removeEventListener("scroll", callback);
  };

  const getScrollX = () =>
    document.getElementById("scrolling-featured-blog-list")?.scrollLeft;

  const serverSnapShot = () => 0;

  const scrollingBlogsScrollLeft = useSyncExternalStore(
    subscriber,
    getScrollX,
    serverSnapShot
  );

  return (
    <section className={styles["highlighted-blog-section"]}>
      <h3 className={styles["highlighted-blogs-title"]}>Highlighted Blogs</h3>
      <div
        className={styles["featured-blogs-container"]}
        id="scrolling-featured-blog-list"
        data-should-bounce={scrollingBlogsScrollLeft === 0}
      >
        <ul className={styles["featured-blogs-list"]}>
          {featuredBlogs.map((blog) => {
            const {
              thumbnail_image,
              category,
              excerpt,
              created_at,
              slug,
              title,
            } = blog;

            return (
              <li className={styles["featured-blog-card"]} key={title + slug}>
                <FeaturedBlogCard
                  thumbnail_image={thumbnail_image}
                  category={category}
                  excerpt={excerpt}
                  created_at={created_at}
                  slug={slug}
                  title={title}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default HighlightedBlogs;
