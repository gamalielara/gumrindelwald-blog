import React from "react";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Prop {
  children: any;
}

const CategoryBox: React.FC<Prop> = ({ children }) => {
  return (
    <div className="rounded bg-black text-white text-xs lg:text-sm my-2 w-fit px-2 p-1 hover:cursor-pointer flex items-center">
      <FontAwesomeIcon icon={faTag} className="h-4 mr-2" />
      {children}
    </div>
  );
};

export default CategoryBox;
