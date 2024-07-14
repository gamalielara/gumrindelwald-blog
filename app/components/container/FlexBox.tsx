import React from "react";

interface FlexBoxInterface {
  children: any;
  justify?: string;
  alignItem?: string;
}

const FlexBox: React.FC<FlexBoxInterface> = ({
  children,
  justify,
  alignItem,
}) => {
  return (
    <div
      className={`flex md:flex-row flex-col-reverse w-full h-full justify-${
        justify || "center"
      } items=${alignItem || "center"}`}
    >
      {children}
    </div>
  );
};

export default FlexBox;
