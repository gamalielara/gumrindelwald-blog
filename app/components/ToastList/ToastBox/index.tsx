import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

interface ToastBoxProps {
  text: string;
  onSlideOutFinish: () => void;
}

const ToastBox: React.FC<ToastBoxProps> = ({ text, onSlideOutFinish }) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxRef.current) return;

    // Animate slide in
    boxRef.current.animate(
      [
        {
          transform: "translateX(0)",
        },
      ],
      { duration: 500, fill: "forwards", easing: "ease" }
    );

    setTimeout(() => {
      if (!boxRef.current) return;

      const slideOutAnimation = boxRef.current.animate(
        [
          {
            transform: "translateX(110%)",
          },
        ],
        { duration: 500, fill: "forwards", easing: "ease" }
      );

      slideOutAnimation.onfinish = onSlideOutFinish;
    }, 5000);
  }, [boxRef.current]);

  return (
    <div className={styles["toast-box"]} ref={boxRef}>
      {text}
    </div>
  );
};

export default ToastBox;
