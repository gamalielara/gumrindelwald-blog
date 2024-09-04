interface ImageLoader {
  src: string;
}

export const IMAGELOADER = (fn: ImageLoader) => fn.src;

export const MENUS = [
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

export enum AppThemeColor {
  DUNKEL = "dunkel",
  LICHT = "licht",
}

export enum CookieNameKey {
  APP_THEME_COLOR = "app-theme-color",
}

export enum WindowBreakPoints {
  SM = 640,
  MD = 768,
  LG_MD = 900,
  LG = 1024,
  XL = 1280,
  XXL = 1536,
}

export const BLOG_CARDS_COUNT = 15;

export const LG_SCREEN_WIDTH = 1024;
