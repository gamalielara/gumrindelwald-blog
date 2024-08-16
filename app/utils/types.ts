import { Category, Language } from "./constants";

export interface ArticleFirestoreResponse {
  documents: {
    name: string;
    fields: {
      excerpt: Pick<FieldResponse, "stringValue">;
      comments: Pick<FieldResponse, "arrayValue">;
      created_at: Pick<FieldResponse, "integerValue">;
      category: Pick<FieldResponse, "stringValue">;
      updated_at: Pick<FieldResponse, "integerValue">;
      likes: Pick<FieldResponse, "arrayValue">;
      content: Pick<FieldResponse, "stringValue">;
      keywords: Pick<FieldResponse, "stringValue">;
      language: Pick<FieldResponse, "stringValue">;
      slug: Pick<FieldResponse, "stringValue">;
      thumbnail_image: Pick<FieldResponse, "stringValue">;
      title: Pick<FieldResponse, "stringValue">;
      id: Pick<FieldResponse, "stringValue">;
      featured: Pick<FieldResponse, "booleanValue">;
    };
    createTime: string;
    updateTime: string;
  }[];
}

interface FieldResponse {
  stringValue?: string;
  arrayValue?: Record<string, unknown>;
  /**
   * @description stringified number
   */
  integerValue?: string;
  booleanValue?: boolean;
  doubleValue?: string;
}

/**
 * @description parsed Article base response from Firestore BE
 */
export interface TrimmedArticle {
  documents: {
    name: string;
    fields: {
      excerpt: string;
      comments: Array<Comment>;
      created_at: number;
      category: Category;
      updated_at: number;
      likes: Array<number>;
      content: string;
      thumbnail_image: string;
      title: string;
      slug: string;
      featured: boolean;
      language: Language;
    };
    createTime: string;
    updateTime: string;
  }[];
}

export interface Article {
  excerpt: string;
  comments: Array<Comment>;
  created_at: number;
  category: Category;
  updated_at: number;
  likes: Array<number>;
  content: string;
  thumbnail_image: string;
  title: string;
  slug: string;
  featured: boolean;
  language: Language;
  createTime: string;
  updateTime: string;
}

export interface Comment {
  id: string;
  username: string;
  body: string;
  timestamp: number;
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
