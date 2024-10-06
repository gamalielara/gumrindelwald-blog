interface ImageLoader {
  src: string;
}

export const IMAGELOADER = (fn: ImageLoader) => fn.src;

export enum Category {
  BOOK = "book",
  FILM = "film",
  PERSONAL_THOUGHTS = "personal_thoughts",
  TECHNOLOGY = "technology",
}

export const MENUS = {
  [Category.BOOK]: {
    name: "Book",
    url: "/category/book",
  },
  [Category.FILM]: {
    name: "Film",
    url: "/category/film",
  },
  [Category.TECHNOLOGY]: {
    name: "Technology",
    url: "/category/tech",
  },
  [Category.PERSONAL_THOUGHTS]: {
    name: "Personal Thoughts",
    url: "/category/personal",
  },
  About_Me: {
    name: "About Me",
    url: "/me",
  },
} as const;

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

const lightModeColorScheme = {
  textColor: "rgb(65, 65, 65)",
  textSecondaryColor: "rgb(161, 161, 161)",
  linkTextColor: "rgb(36, 36, 36)",
  navLinkTextColor: "rgb(36, 36, 36)",
  secondaryColor: "rgb(36, 36, 36)",
  backgroundColor: "rgb(215, 215, 215)",
  backgroundColorGrey: "rgb(182, 182, 182)",
  backgroundColorSecondary: "rgb(240, 240, 240)",
  backgroundColorHeader: "rgba(84, 84, 84, 0.25)",
  cardColor: "rgb(220, 220, 220)",
  cardBackColor: "rgb(228, 226, 226)",
  btnColorPrimary: "rgb(36, 36, 36)",
  logoColor: "rgb(36, 36, 36)",
  themeToggleButtonBgcolor: "rgb(214, 213, 213)",
  themeToggleIndicatorColor: "rgb(55, 55, 55)",
} as const;

const darkModeColorScheme = {
  textColor: "rgb(240, 240, 240)",
  textSecondaryColor: "rgb(77, 77, 77)",
  linkTextColor: "rgb(124, 128, 131)",
  navLinkTextColor: "rgb(203, 203, 203)",
  secondaryColor: "rgb(60, 60, 60)",
  backgroundColor: "rgb(70, 70, 70)",
  backgroundColorGrey: "rgb(50, 50, 50)",
  backgroundColorSecondary: "rgb(45, 45, 45)",
  backgroundColorHeader: "rgba(199, 199, 199, 0.3)",
  cardColor: "rgb(50, 50, 50)",
  cardBackColor: "rgb(40, 40, 40)",
  btnColorPrimary: "rgb(174, 174, 174)",
  logoColor: "rgb(233, 233, 233)",
  themeToggleButtonBgcolor: "rgb(152, 151, 151)",
  themeToggleIndicatorColor: "rgb(55, 55, 55)",
} as const;

export const colorTheme = {
  [AppThemeColor.DUNKEL]: darkModeColorScheme,
  [AppThemeColor.LICHT]: lightModeColorScheme,
} as const;

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

export enum LocalStorageKey {
  LIKES = "this-user-article-likes",
  COMMENTS = "this-user-article-comments",
}
