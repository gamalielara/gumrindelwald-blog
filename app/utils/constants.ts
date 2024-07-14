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
} as const;

export enum Language {
  ID = "in",
  EN = "en",
  DE = "de",
  RU = "ru",
}

export const BLOG_CARDS_COUNT = 15;

export const LG_SCREEN_WIDTH = 1024;
