import React from "react";
import { ClientContextProviderValue, ClientContextState } from "./types";

export const ClientContext = React.createContext<ClientContextProviderValue>({
  comments: [],
  likes: 0,
  setLikes: undefined as unknown as () => void,
  getLikesAndCommentOfThisblog: undefined as unknown as () => void,
});
