import { Category } from "./constants";
import { firestoreDB } from "./firebase";
import parseAndTrimBlogs from "./parseAndTrimBlogs";
import { Article, ArticleFirestoreResponse } from "./types";
import { collection, query, where, getDocs } from "@firebase/firestore";

class ApiService {
  private static projectId: string = process.env.REACT_APP_PROJECTID ?? "";

  private static baseFirestoreGoogleAPIURL =
    "https://firestore.googleapis.com/v1/projects";

  private static blogsDocRef = collection(firestoreDB, "blogs");

  public static getAllArticles = async (): Promise<Article[]> => {
    const rawArticles = await getDocs(this.blogsDocRef);

    const processedArticles = rawArticles.docs.map((blogDoc) => ({
      ...blogDoc.data(),
      id: blogDoc.id,
    })) as Artcile[];

    // Sort decendingly
    processedArticles.sort((a, b) => b.created_at - a.created_at);

    return processedArticles;
  };

  public static getSingleArticle = async (
    slugToFind: string
  ): Promise<Article> => {
    const articles = await this.getAllArticles();

    console.log({ articles });

    const queryBlog = query(this.blogsDocRef, where("slug", "==", slugToFind));
    const queryRawResult = await getDocs(queryBlog);
    const queryResult = queryRawResult.docs.map((blog) => ({
      ...blog.data(),
      id: blog.id,
    }))[0] as Article;

    console.log({ queryResult, raw: queryRawResult.docs });

    return queryResult ?? {};
  };

  public static getArticlesCategory = async (
    category: Category
  ): Promise<Article[]> => {
    const allArticles = await this.getAllArticles();

    return allArticles.filter((artcle) => artcle.category === category);
  };
}

export default ApiService;
