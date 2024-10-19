"use client";

import { CustomEventNames } from "<utils>/constants";
import { PropsWithChildren, useEffect } from "react";

export default ({ children }: PropsWithChildren<unknown>) => {
  useEffect(() => {
    const handleError = (event: Event) => {
      console.log("ERROR? ", (event as CustomEvent).detail);
    };

    document.addEventListener(CustomEventNames.SHOW_TOAST, handleError);

    return () =>
      document.removeEventListener(CustomEventNames.SHOW_TOAST, handleError);
  }, []);

  return children;
};
