import { showToast } from "<utils>/showToast";
import { useRef } from "react";

export default <T extends Function>(func: T, delay = 1000) => {
  const timeoutId = useRef<NodeJS.Timeout>();
  const shouldWait = useRef<boolean>(false);

  return function (...args: unknown[]) {
    if (shouldWait.current) {
      showToast(
        "You seem pretty fast clicking that button. No need to hurry, please wait for a while :)"
      );
      return;
    }

    clearTimeout(timeoutId.current);

    //@ts-ignore
    func.apply(this, ...args);
    shouldWait.current = true;

    timeoutId.current = setTimeout(() => {
      shouldWait.current = false;
    }, delay);
  };
};
