import React, { ReactElement } from "react";

interface Props {
  name: string;
  children: ReactElement;
}

const LargeButton: React.FC<Props> = ({ name, children }) => {
  return (
    <button
      className={`${name} rounded bg-transparent hover:bg-black text-black hover:text-white hover:underline sm:text-lg text-base px-4 py-2 mx-2 transition-all`}
    >
      {children}
    </button>
  );
};

export default LargeButton;
