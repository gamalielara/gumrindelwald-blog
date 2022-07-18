import React from "react";

interface Props {
  children: any;
  center?: boolean;
  color?: string;
}

const HeadingThree: React.FC<Props> = ({ children, center, color }) => {
  return (
    <h3
      className={`font-bold md:text-3xl sm:text-xl text-lg my-2 ${
        center && "text-center"
      } ${color && `text-${color}`}`}
    >
      {children}
    </h3>
  );
};

export default HeadingThree;
