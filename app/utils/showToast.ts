import { CustomEventNames } from "./constants";

export const showToast = (content: unknown) => {
  if (typeof window === "undefined") {
    // Handle error in server component later
    console.log(content);
    return;
  }

  let text = content;

  if (content instanceof Error) {
    text = content.message;
  }

  const toastEvent = new CustomEvent(CustomEventNames.SHOW_TOAST, {
    detail: content,
  });

  document.dispatchEvent(toastEvent);
};
