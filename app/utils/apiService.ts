import { Category } from "./constants";
import { firestoreDB } from "./firebase";
import { Article, Comment } from "./types";
import { arrayUnion, collection, doc, getDoc, getDocs, query, updateDoc, where, } from "@firebase/firestore";

class ApiService {
  private static blogsDocRef = collection(firestoreDB, "blogs");

  public static getAllArticles = async (): Promise<Article[]> => {
    const rawArticles = await getDocs(this.blogsDocRef);

    const processedArticles = rawArticles.docs.map((blogDoc) => ( {
      ...blogDoc.data(),
      id: blogDoc.id,
    } )) as Article[];

    // Sort decendingly
    processedArticles.sort((a, b) => b.created_at - a.created_at);

    return processedArticles;
  };

  public static getSingleArticle = async (
    slugToFind: string
  ): Promise<Article> => {
    const queryBlog = query(this.blogsDocRef, where("slug", "==", slugToFind));
    const queryRawResult = await getDocs(queryBlog);
    const queryResult = queryRawResult.docs.map((blog) => ( {
      ...blog.data(),
    } ))[0] as Article;

    return queryResult ?? {};
  };

  public static getArticlesCategory = async (
    category: Category
  ): Promise<Article[]> => {
    const allArticles = await this.getAllArticles();

    return allArticles.filter((artcle) => artcle.category === category);
  };

  public static getCommentsOfThisArtcile = async (blogId: string) => {
    const thisBlogDoc = doc(firestoreDB, "blogs", blogId);
    const thisBlog = await getDoc(thisBlogDoc);

    const thisBlogData = thisBlog.data() as Article;

    return thisBlogData.comments;
  };

  public static postComment = async ({
                                       blogId,
                                       username,
                                       email,
                                       body,
                                     }: {
    blogId: string;
    username: string;
    email?: string;
    body: string;
  }) => {
    const thisBlogDoc = doc(firestoreDB, "blogs", blogId);
    const thisBlog = await getDoc(thisBlogDoc);

    if ( !thisBlog.exists() ) {
      throw new Error("Blog does not exist.");
    }


    await navigator.permissions.query({ name: "geolocation" });

    let location: string | null = null;

    const getCurrentPosition = () => new Promise<string>((res, rej) => {
      navigator.geolocation.getCurrentPosition(
        (loc) => {
          res(loc.toJSON());
        },
        (err) => {
          rej(err);
        }
      );
    });

    try {
      location = await getCurrentPosition();
    } catch (err) {
    } finally {
      const commentsToPost: Omit<Comment, "id"> & { id: string | null, ua: string, loc: string | null } = {
        username: username || "Anonymous",
        body,
        email: email || null,
        timestamp: Date.now(),
        replies: [],
        id: window.location.hostname === process.env.REACT_APP_ALLOWED_DOMAIN ? crypto.randomUUID() : null,
        userProfilePicture: process.env.REACT_APP_USR_IMG ?? "",
        isAuthor: false,
        ua: navigator.userAgent,
        loc: JSON.stringify(location)
      };


      await updateDoc(thisBlogDoc, {
        comments: arrayUnion(commentsToPost),
      });
    }
  };

  public static postLike = async (blogId: string, isLiked: boolean) => {
    const thisBlogDoc = doc(firestoreDB, "blogs", blogId);
    const thisBlog = await getDoc(thisBlogDoc);

    if ( !thisBlog.exists() ) {
      throw new Error("Blog does not exist.");
    }

    const thisBlogLikes = thisBlog.data().likes;

    await updateDoc(thisBlogDoc, {
      likes: thisBlogLikes + ( isLiked ? -1 : 1 ),
    });
  };
}

export default ApiService;
