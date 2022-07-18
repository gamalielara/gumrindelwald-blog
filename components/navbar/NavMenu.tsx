import React from "react";

interface Prop {
  children: any;
}

const NavMenu: React.FC<Prop> = ({ children }) => {
  return (
    <li className="md:mx-2 w-1/2 md:w-auto hover:bg-black hover:text-white hover:cursor-pointer transition-all rounded p-2">
      <h3 className="md:text-base text-sm font-semibold m-0">{children}</h3>
    </li>
  );
};

export default NavMenu;
