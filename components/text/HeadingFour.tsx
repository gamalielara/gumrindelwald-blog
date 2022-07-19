import React from "react";

interface Props {
  children: any;
  center?: boolean;
  title?: boolean;
}

const HeadingFour: React.FC<Props> = ({ children, center }) => {
  return (
    <h4
      className={`font-bold md:text-2xl sm:text-xl text-lg ${
        center && "text-center"
      }`}
    >
      {children}
    </h4>
  );
};

export default HeadingFour;
