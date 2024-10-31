import React, { SetStateAction } from "react";
import styles from "./styles.module.scss";
import { Toast } from "<utils>/types";
import ToastBox from "./ToastBox";

interface Props {
  toasts: Toast[];
  setToasts: React.Dispatch<SetStateAction<Toast[]>>;
}

const ToastList: React.FC<Props> = ({ toasts, setToasts }) => {
  return (
    <div className={styles["toast-list-wrapper"]}>
      {toasts.map((toast) => (
        <ToastBox
          key={toast.id}
          text={toast.text}
          onSlideOutFinish={() => {
            setToasts((state) =>
              state.filter((toastItem) => toastItem.id !== toast.id)
            );
          }}
        />
      ))}
    </div>
  );
};

export default ToastList;
