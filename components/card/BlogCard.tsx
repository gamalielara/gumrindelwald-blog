import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogCardInterface, CATEGORIES, IMAGELOADER } from "../../utils/vars";
import CategoryBox from "../article/CategoryBox";
import Button from "../Button";
import HeadingFive from "../text/HeadingFive";

const BlogCard: React.FC<BlogCardInterface> = ({
  title,
  category,
  excerpt,
  datePosted,
  thumbnail,
  slug,
}) => {
  return (
    <article className="lg:w-30p md:w-40p w-full md:relative flex flex-col m-2 rounded-lg shadow-xl bg-gray-50 p-2">
      <div
        className="article-heading-image rounded w-full md:h-auto h-40 relative mr-4"
        style={{ paddingTop: "50%" }}
      >
        <Image
          src={
            thumbnail
              ? thumbnail.url
              : "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          }
          alt={title}
          layout="fill"
          loader={IMAGELOADER}
          objectFit="cover"
          className="rounded-lg"
          unoptimized
        />
      </div>
      <div className="blog-content flex flex-col w-full p-4">
        <Link href={`/article/${slug}`}>
          <a className="flex font-semibold hover:underline">
            <HeadingFive>{title}</HeadingFive>
          </a>
        </Link>

        <span className="text-sm">{new Date(datePosted).toDateString()}</span>
        <div className="categories flex gap-4">
          {category.map((c, i) => (
            <CategoryBox key={i}>{c}</CategoryBox>
          ))}
        </div>
        {/* <p className="text-justify text-sm">{excerpt}</p> */}
      </div>
    </article>
  );
};

export default BlogCard;
