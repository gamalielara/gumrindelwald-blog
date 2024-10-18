"use client";
import { ClientContext } from "<utils>/clientContext";
import React, { PropsWithChildren, useReducer } from "react";
import { clientReducer } from "../../hooks/clientReducer";

const ClientProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [state, dispatch] = useReducer(clientReducer, {
    comments: [],
  });

  return (
    <ClientContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
