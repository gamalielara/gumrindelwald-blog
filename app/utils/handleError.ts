import { CustomEventNames } from "./constants";

export const handleError = (error: unknown) => {
  if (typeof window === "undefined") {
    // Handle error in server component later
    console.log(error);
    return;
  }

  const errorEvent = new CustomEvent(CustomEventNames.ERROR, { detail: error });

  document.dispatchEvent(errorEvent);
};
