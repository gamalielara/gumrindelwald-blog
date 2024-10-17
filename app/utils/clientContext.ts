import React from "react";
import { ClientContextProviderValue, ClientContextState } from "./types";

export const ClientContext = React.createContext<ClientContextProviderValue>({
  comments: [],
  dispatch: () => {},
});
