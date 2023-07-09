import Image from "next/image";
import React, { useEffect, useRef } from "react";
import {
  BlogCardInterface,
  CATEGORY_DICTIONARIES,
  IMAGELOADER,
} from "../../utils/vars";
import CategoryBox from "../article/CategoryBox";
import styles from "./styles.module.scss";
import Link from "next/link";
import usePlatform from "../../hooks/usePlatform";

type BlogTypeKeys =
  | "title"
  | "category"
  | "excerpt"
  | "created_at"
  | "thumbnail_image"
  | "slug";

type BlogCardType = Pick<BlogCardInterface, BlogTypeKeys> & { i: number };

const BlogCard: React.FC<BlogCardType> = ({
  title,
  category,
  created_at,
  thumbnail_image,
  excerpt,
  slug,
  i,
}) => {
  const [isInMobile, platform] = usePlatform();

  const cardWrapperRef = useRef<HTMLDivElement>(null);

  const onCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isInMobile) {
      e.currentTarget.classList.toggle(
        styles["article-card-wrapper__card-clicked"]
      );
    }
  };

  useEffect(() => {
    if (!isInMobile) return;

    document.addEventListener("click", (e: any) => {
      // Check if the event target is not the card itself (or its descendants)
      if (!cardWrapperRef.current?.contains(e.target)) {
        cardWrapperRef.current?.classList.remove(
          styles["article-card-wrapper__card-clicked"]
        );
      }
    });
  }, [isInMobile]);

  return (
    <div
      data-platform={`${isInMobile ? "mobile" : "general"}-${platform}`}
      className={styles["article-card-wrapper"]}
      onClick={onCardClick}
      ref={cardWrapperRef}
    >
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
        </div>
        <div className={styles["article-card__back"]}>
          <p>{excerpt}</p>
          <Link href={`/article/${slug}`}>
            <button>Read More</button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogCard;
