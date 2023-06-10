import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect } from "react";
import {
  BlogCardInterface,
  CATEGORY_DICTIONARIES,
  IMAGELOADER,
} from "../../utils/vars";
import CategoryBox from "../article/CategoryBox";
import Button from "../Button";
import HeadingFour from "../text/HeadingFour";

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
      className="w-full mx-auto flex md:flex-row flex-col justify-center items-center mb-2 p-2 rounded-xl bg-gray-100 shadow"
      id="featured-blog"
    >
      <div className="article-heading-image rounded lg:w-1/3 md:w-1/2 w-full md:h-72 h-40 relative mr-4">
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
      <div className="blog-content flex flex-col lg:w-2/3 md:1/2 w-full justify-evenly">
        <span className="font-semibold my-2">FEATURED POST</span>
        <HeadingFour>{title}</HeadingFour>
        <span className="text-sm">{new Date(created_at).toDateString()}</span>
        <div className="category flex gap-4">
          <CategoryBox category={category}>
            {CATEGORY_DICTIONARIES[category]}
          </CategoryBox>
        </div>
        <p className="text-justify text-sm lg:text-base">{excerpt}</p>
        <Button>
          <Link href={`/article/${slug}`}>
            <a className="flex font-semibold hover:underline">Read More</a>
          </Link>
        </Button>
      </div>
    </article>
  );
};

export default FeaturedBlogCard;
