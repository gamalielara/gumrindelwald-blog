import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction } from "react";

interface NavMobileButtonInterface {
  setShowBar: Dispatch<SetStateAction<boolean>>;
}

const NavMobileButton: React.FC<NavMobileButtonInterface> = ({
  setShowBar,
}) => {
  const showBarHandler = () => setShowBar((state: boolean) => !state);

  return (
    <button
      className="bg-gray-300 rounded-full absolute bottom-4 right-4 w-14 h-14 flex justify-center items-center z-40 transition-all ease-in-out duration-700"
      onClick={showBarHandler}
    >
      <FontAwesomeIcon icon={faBars} className="h-7" />
    </button>
  );
};

export default NavMobileButton;
