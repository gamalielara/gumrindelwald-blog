import React, { PropsWithChildren } from "react";
import { figTree } from "./ui/font";
import "./styles/global.scss";
import "./theme.css";
import { cookies } from "next/headers";
import { AppThemeColor, CookieNameKey } from "<utils>/constants";

(function () {
  if (process.env.NODE_ENV !== "development") return;

  if (typeof window === "undefined") {
    const { mockServer } = require("../mock/mockServer");
    mockServer.listen();

    console.log("MSW in Server Component has been initialized.");
  } else {
    const { mockWorker } = require("../mock/mockBrowser");
    mockWorker.start();

    console.log("MSW in Server Component has been initialized.");
  }
})();

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const cookieStore = cookies();
  const colorTheme = cookieStore.get(CookieNameKey.APP_THEME_COLOR);

  return (
    <html
      lang="id"
      className={figTree.className}
      data-theme={colorTheme?.value ?? AppThemeColor.LICHT}
    >
      <title>gumrindelwald</title>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
