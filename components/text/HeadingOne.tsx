import React from "react";

interface Props {
  children: any;
  center?: boolean;
}

const HeadingOne: React.FC<Props> = ({ children, center }) => {
  return (
    <h1
      className={`font-bold lg:text-5xl sm:text-3xl text-xl md:my-4 sm:my-2 my-1 ${
        center && "text-center"
      }`}
    >
      {children}
    </h1>
  );
};

export default HeadingOne;
