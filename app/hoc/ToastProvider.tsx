"use client";

import ToastList from "<components>/ToastList";
import { CustomEventNames } from "<utils>/constants";
import { Toast } from "<utils>/types";
import { PropsWithChildren, useEffect, useState } from "react";

export default ({ children }: PropsWithChildren<unknown>) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const showToast = (e: Event) => {
      const toastText = (e as CustomEvent).detail;

      setToasts((state) => [
        ...state,
        { isError: true, text: toastText, id: crypto.randomUUID() },
      ]);
    };

    document.addEventListener(CustomEventNames.SHOW_TOAST, showToast);

    return () => {
      document.removeEventListener(CustomEventNames.SHOW_TOAST, showToast);
    };
  });

  return (
    <div>
      {children}
      <ToastList toasts={toasts} setToasts={setToasts} />
    </div>
  );
};
