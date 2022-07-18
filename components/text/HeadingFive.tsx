import React from "react";

interface Props {
  children: any;
  center?: boolean;
}

const HeadingFive: React.FC<Props> = ({ children, center }) => {
  return (
    <h5
      className={`font-bold md:text-xl sm:text-lg text-base m-0 ${
        center && "text-center"
      }`}
    >
      {children}
    </h5>
  );
};

export default HeadingFive;
