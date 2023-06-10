import { getDocs, query, where } from "@firebase/firestore";
import { BLOGS_REF } from "./vars";

export const fetchAllBlogs = async () => {
  const rawBlogs = await getDocs(BLOGS_REF);

  return rawBlogs.docs.map((blogDoc) => ({
    ...blogDoc.data(),
    id: blogDoc.id,
  }));
};

export const queryBlogs = async ({ field, value }: Record<string, string>) => {
  const queryBlog = query(BLOGS_REF, where(field, "==", value));
  const queryRawResult = await getDocs(queryBlog);
  const queryResult = queryRawResult.docs.map((blog) => ({
    ...blog.data(),
    id: blog.id,
  }));

  return queryResult ?? [];
};
