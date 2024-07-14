import { http, HttpResponse } from "msw";
import { ALL_BLOGS } from "./mockData/allBlogs";

export const handlers = [
  // Note: MSW does not recognize URL with parenthesis for no obvious reason (seems like they failed when parsing the url via `URL` obj)
  http.get(
    "https://firestore.googleapis.com/v1/projects/:projectId/databases/:default/documents/blogs",
    () => {
      return HttpResponse.json(ALL_BLOGS);
    }
  ),
];
