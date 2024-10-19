import { Category, ClientActionType, Language } from "./constants";

export interface Article {
  excerpt: string;
  comments: Array<Comment>;
  keywords: string;
  created_at: number;
  category: Category;
  updated_at: number;
  likes: number;
  content: string;
  thumbnail_image: string;
  title: string;
  slug: string;
  featured: boolean;
  language: Language;
  createTime: string;
  updateTime: string;
  id: string;
}

export interface Comment {
  id: string;
  username: string;
  userProfilePicture: string;
  isAuthor: boolean;
  body: string;
  timestamp: number;
  email: string | null;
  replies: Array<Comment>;
}

export interface BlogCardInterface {
  id: string;
  category: Category;
  comments: Comment[];
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

export interface ClientContextState {
  comments: Comment[];
}

export interface ClientContextProviderValue {
  comments: Comment[];
  dispatch: React.Dispatch<ClientAction<unknown>>;
}

export interface ClientAction<T extends unknown> {
  type: ClientActionType;
  value: T;
}
