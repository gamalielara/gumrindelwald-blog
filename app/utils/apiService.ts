import FireStoreParser from "./firestoreParser";
import { isDev } from "./isDev";
import { Article, ArticleFirestoreResponse } from "./types";

class ApiService {
  private static initMock() {
    if (process.env.NODE_ENV !== "development") return;

    if (typeof window === "undefined") {
      const { mockServer } = require("../../mock/mockServer");
      mockServer.listen();

      console.log("MSW in Server Component has been initialized.");
    } else {
      const { mockWorker } = require("../../mock/mockServer");
      mockWorker.start();

      console.log("MSW in Server Component has been initialized.");
    }
  }

  private static projectId: string = process.env.REACT_APP_PROJECTID ?? "";

  private static baseFirestoreGoogleAPIURL =
    "https://firestore.googleapis.com/v1/projects";

  public static getAllBlogs = async (): Promise<Article> => {
    this.initMock();

    const response = await fetch(
      `${this.baseFirestoreGoogleAPIURL}/${this.projectId}/databases/(default)/documents/blogs`,
      { next: { revalidate: 3600 } }
    );

    const responseData = (await response.json()) as ArticleFirestoreResponse;

    const articles = FireStoreParser(responseData);

    console.log("articles", articles);

    return articles;
  };
}

export default ApiService;
