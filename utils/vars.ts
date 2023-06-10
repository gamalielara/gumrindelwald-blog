import { GraphQLClient } from "graphql-request";
import { collection } from "@firebase/firestore";
import { db } from "./firebase";

interface ImageLoader {
  src: string;
}

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

export enum Category {
  BOOK = "book",
  FILM = "film",
  PERSONAL_THOUGHTS = "personal_thoughts",
  TECHNOLOGY = "technology",
}

export const CATEGORY_DICTIONARIES = {
  [Category.BOOK]: "📚 Book",
  [Category.FILM]: "🎞️ Film",
  [Category.PERSONAL_THOUGHTS]: "💬 Personal Thoughts",
  [Category.TECHNOLOGY]: "👨🏻‍💻 Technology",
};

export enum Language {
  ID = "in",
  EN = "en",
  DE = "de",
  RU = "ru",
}

export interface BlogCardInterface {
  id: string;
  category: Category;
  comments: CommentInterface[];
  created_at: number;
  excerpt: string;
  featured: boolean;
  slug: string;
  thumbnail_image: string;
  title: string;
  updated_at: number;
  likes: number[];
  language: Language;
}

export interface ArticleInterface extends BlogCardInterface {
  content: string;
  keywords: string;
  tags?: string;
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

export interface CommentInterface {
  id: string;
  username: string;
  body: string;
  timestamp: number;
}

export const BLOGS_REF = collection(db, "blogs");
