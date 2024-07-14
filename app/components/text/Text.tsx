import React from "react";

interface TextInterface {
  size?: string;
  children: any;
  center?: boolean | undefined;
  gray?: boolean | undefined;
}

const Text: React.FC<TextInterface> = ({ size, center, gray, children }) => {
  return (
    <p
      className={`text-${size || "base"} ${center && "text-center"} ${
        gray && `text-gray-500`
      }`}
    >
      {children}
    </p>
  );
};

export default Text;
