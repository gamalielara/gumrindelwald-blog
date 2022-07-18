import React from "react";

interface Prop {
  children: any;
}

const Button: React.FC<Prop> = ({ children }) => {
  return (
    <div className="rounded bg-black text-white text-xs lg:text-sm my-2 w-fit px-2 p-1 hover:cursor-pointer">
      {children}
    </div>
  );
};

export default Button;
