import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    posts: [],
  },
  reducers: {
    setArticles(state, action) {
      state.posts = action.payload;
    },
  },
});

export const { setArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
