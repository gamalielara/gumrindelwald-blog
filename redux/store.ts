import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articlesSlice";

export const store = configureStore({
  reducer: {
    articles: articleReducer,
  },
});
