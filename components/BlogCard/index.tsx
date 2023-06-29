import Image from "next/image";
import React from "react";
import {
  BlogCardInterface,
  CATEGORY_DICTIONARIES,
  IMAGELOADER,
} from "../../utils/vars";
import CategoryBox from "../article/CategoryBox";
import styles from "./styles.module.scss";
import Link from "next/link";

type BlogTypeKeys =
  | "title"
  | "category"
  | "excerpt"
  | "created_at"
  | "thumbnail_image"
  | "slug";

const BlogCard = React.forwardRef(
  (
    {
      title,
      category,
      created_at,
      thumbnail_image,
      slug,
      i,
    }: Pick<BlogCardInterface, BlogTypeKeys> & { i: number },
    ref: any
  ) => {
    return (
      <Link href={`/article/${slug}`}>
        <article
          className={`${styles["article-box"]} blog-card-${i}`}
          ref={ref}
        >
          <div className={styles["article-image"]}>
            <Image
              src={
                thumbnail_image ??
                "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
              }
              alt={title}
              layout="fill"
              loader={IMAGELOADER}
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
        </article>
      </Link>
    );
  }
);

export default BlogCard;
