import parseAndTrimBlogs from "./parseAndTrimBlogs";
import { Article, ArticleFirestoreResponse } from "./types";

class ApiService {
  private static projectId: string = process.env.REACT_APP_PROJECTID ?? "";

  private static baseFirestoreGoogleAPIURL =
    "https://firestore.googleapis.com/v1/projects";

  public static getAllBlogs = async (): Promise<Article[]> => {
    const response = await fetch(
      `${this.baseFirestoreGoogleAPIURL}/${this.projectId}/databases/(default)/documents/blogs`,
      { next: { revalidate: 3600 } }
    );

    const responseData = (await response.json()) as ArticleFirestoreResponse;

    const articles = parseAndTrimBlogs(responseData);

    return articles ?? [];
  };
}

export default ApiService;
