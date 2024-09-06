"use server";

import { AppThemeColor, CookieNameKey } from "<utils>/constants";
import { cookies } from "next/headers";

export const setColorTheme = async () => {
  const cookieStore = cookies();

  const currentColorTheme =
    cookieStore.get(CookieNameKey.APP_THEME_COLOR)?.value ??
    AppThemeColor.LICHT;

  const isLightMode = currentColorTheme === AppThemeColor.LICHT;

  cookieStore.set(
    CookieNameKey.APP_THEME_COLOR,
    isLightMode ? AppThemeColor.DUNKEL : AppThemeColor.LICHT,
    {
      maxAge: 99999 * 1000,
    }
  );
};

export const getColorTheme = async () => {
  const cookieStore = cookies();

  return (cookieStore.get(CookieNameKey.APP_THEME_COLOR)?.value ??
    AppThemeColor.LICHT) as AppThemeColor;
};
