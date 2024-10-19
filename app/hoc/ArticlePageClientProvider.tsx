"use client";
import { ClientContext } from "<utils>/clientContext";
import React, { PropsWithChildren, useEffect, useReducer } from "react";
import { clientReducer } from "../../hooks/clientReducer";
import ApiService from "<utils>/apiService";
import { ClientActionType } from "<utils>/constants";

interface Props {
  slug: string;
}

const ArticlePageClientProvider: React.FC<PropsWithChildren<Props>> = ({
  slug,
  children,
}) => {
  const [state, dispatch] = useReducer(clientReducer, {
    comments: [],
    likes: 0,
  });

  const getLikesAndCommentOfThisblog = async () => {
    const { comments, likes } = await ApiService.getSingleArticle(slug);
    dispatch({ type: ClientActionType.UPDATE_COMMENTS, value: comments });
    dispatch({ type: ClientActionType.UPDATE_LIKES, value: likes });
  };

  const setLikes = (likes: number) => {
    dispatch({ type: ClientActionType.UPDATE_LIKES, value: likes });
  };

  return (
    <ClientContext.Provider
      value={{ ...state, setLikes, getLikesAndCommentOfThisblog }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ArticlePageClientProvider;
