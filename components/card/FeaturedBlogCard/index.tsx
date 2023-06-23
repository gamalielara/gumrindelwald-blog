import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect } from "react";
import {
  BlogCardInterface,
  CATEGORY_DICTIONARIES,
  IMAGELOADER,
} from "../../../utils/vars";
import CategoryBox from "../../article/CategoryBox";
import Button from "../../Button";
import styles from "./styles.module.scss";

type FeaturedBlogCardKeys =
  | "thumbnail_image"
  | "category"
  | "excerpt"
  | "created_at"
  | "slug"
  | "title";

const FeaturedBlogCard: React.FC<
  Pick<BlogCardInterface, FeaturedBlogCardKeys>
> = ({ thumbnail_image, category, excerpt, created_at, slug, title }) => {
  useLayoutEffect(() => {
    const featuredBlogCard = document.getElementById("featured-blog");
    const articleImageContainer = document.getElementsByClassName(
      "article-heading-image"
    )[0] as HTMLElement;

    if (window.innerWidth >= 700 && featuredBlogCard && articleImageContainer) {
      articleImageContainer.style.height = `${featuredBlogCard.clientHeight}px`;
    }
  }, []);

  return (
    <article
      className={styles["featured-blog-card-wrapper"]}
      id="featured-blog"
    >
      <div className={styles["article-image"]}>
        <Image
          src={thumbnail_image}
          alt={title}
          layout="fill"
          loader={IMAGELOADER}
          objectFit="cover"
          className="rounded-lg"
          priority
          unoptimized
        />
      </div>
      <div className={styles["blog-content"]}>
        <h3>{title}</h3>
        <span className={styles["date-posted"]}>
          {new Date(created_at).toDateString()}
        </span>
        <CategoryBox category={category}>
          {CATEGORY_DICTIONARIES[category]}
        </CategoryBox>
        <p className={styles["blog-excerpt"]}>{excerpt}</p>
        <button className={styles["read-more-btn"]}>
          <Link href={`/article/${slug}`}>
            <a className={styles["read-more"]}>Read More</a>
          </Link>
        </button>
      </div>
    </article>
  );
};

export default FeaturedBlogCard;
