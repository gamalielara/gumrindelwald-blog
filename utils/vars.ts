import { GraphQLClient } from "graphql-request";

interface ImageLoader {
  src: string;
}

export const graphcms = new GraphQLClient(process.env.API_ENDPOINT as string);

export const IMAGELOADER = (fn: ImageLoader) => fn.src;

export const MENUS = [
  {
    name: "All Blogs",
    url: "/blogs",
  },
  {
    name: "Book",
    url: "/category/book",
  },
  {
    name: "Film",
    url: "/category/film",
  },
  {
    name: "Technology",
    url: "/category/tech",
  },
  {
    name: "Personal Thoughts",
    url: "/category/personal",
  },
  {
    name: "About Me",
    url: "/me",
  },
];

export const CATEGORIES = ["Book", "Film", "Technology", "Personal Thoughts"];

export interface BlogCardInterface {
  id?: () => string | string;
  title: string;
  category: string;
  created_at: string;
  thumbnail_image: string;
  excerpt: string;
  slug: string;
  featured: boolean;
}

export interface ArticleInterface extends BlogCardInterface {
  content: {
    html: string;
  };
  keywords: string;
  tags?: string;
  language: string;
}

export interface BlogsPage {
  blogs: BlogCardInterface[];
}

export interface params {
  params: {
    slug: string;
  };
}

export interface StateInterface {
  articles: {
    blogs: ArticleInterface[];
  };
}
