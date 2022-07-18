import React from "react";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Prop {
  children: any;
}

const Tag: React.FC<Prop> = ({ children }) => {
  return (
    <div className="rounded bg-gray-200 text-black text-xs lg:text-sm my-2 w-fit px-2 p-1 hover:cursor-pointer flex items-center font-semibold">
      {children}
    </div>
  );
};

export default Tag;
