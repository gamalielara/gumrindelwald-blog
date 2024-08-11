import React, { PropsWithChildren } from "react";
import { figTree } from "./ui/font";
import "./global.css";

function initMock() {
  if ( process.env.NODE_ENV !== "development" ) return;

  if ( typeof window === "undefined" ) {
    const { mockServer } = require("../mock/mockServer");
    mockServer.listen();

    console.log("MSW in Server Component has been initialized.");
  } else {
    const { mockWorker } = require("../mock/mockBrowser");
    mockWorker.start();

    console.log("MSW in Server Component has been initialized.");
  }
}

initMock();

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="id" className={ figTree.className } data-theme="dunkel">
    <title>gumrindelwald</title>
    <body>{ children }</body>
    </html>
  );
};

export default RootLayout;
