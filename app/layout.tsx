import React, { PropsWithChildren } from "react";
import { figTree } from "./ui/font";
import "./styles/global.scss";
import "./theme.css";
import { cookies } from "next/headers";
import { AppThemeColor, CookieNameKey } from "<utils>/constants";

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const cookieStore = cookies();
  const colorTheme = cookieStore.get(CookieNameKey.APP_THEME_COLOR);

  return (
    <html
      lang="id"
      className={figTree.className}
      data-theme={colorTheme?.value ?? AppThemeColor.LICHT}
      id="root"
    >
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
