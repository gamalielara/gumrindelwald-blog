import Image from "next/image";
import React from "react";
// import {
//   BlogCardInterface,
//   CATEGORY_DICTIONARIES,
//   IMAGELOADER,
// } from "../../app/utils/vars";
import CategoryBox from "../article/CategoryBox";
import styles from "./styles.module.scss";
import Link from "next/link";
import { CATEGORY_DICTIONARIES, IMAGELOADER } from "<utils>/constants";

type BlogTypeKeys =
  | "title"
  | "category"
  | "excerpt"
  | "created_at"
  | "thumbnail_image"
  | "slug"
  | "language";

type BlogCardType = Pick<BlogCardInterface, BlogTypeKeys> & { i: number };

const BlogCard: React.FC<BlogCardType> = ({
  title,
  category,
  created_at,
  thumbnail_image,
  excerpt,
  slug,
  language,
}) => {
  return (
    <div className={styles["article-card-wrapper"]}>
      <input type="checkbox" />
      <article className={styles["article-card"]}>
        <div className={styles["article-card__front"]}>
          <div className={styles["article-image"]}>
            <Image
              src={
                thumbnail_image ??
                "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
              }
              alt={title}
              layout="fill"
              // loader={IMAGELOADER}
              objectFit="cover"
              unoptimized
            />
          </div>
          <div className={styles["blog-content"]}>
            <CategoryBox category={category}>
              {CATEGORY_DICTIONARIES[category]}
            </CategoryBox>
            <span className={styles["article-date-posted"]}>
              {new Date(created_at).toDateString()}
            </span>

            <h4>{title}</h4>
          </div>
        </div>
        <div className={styles["article-card__back"]}>
          <p>{excerpt}</p>
          <Link href={`/article/${slug}`} locale={language}>
            <button className={styles["to-blog-link"]}>Read More</button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogCard;
