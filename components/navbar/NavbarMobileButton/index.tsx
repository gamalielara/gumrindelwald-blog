import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";

interface NavMobileButtonInterface {
  setShowBar: Dispatch<SetStateAction<boolean>>;
}

const NavMobileButton: React.FC<NavMobileButtonInterface> = ({
  setShowBar,
}) => {
  const showBarHandler = () => setShowBar((state: boolean) => !state);

  return (
    <button
      className={styles["hamburger-mobile-nav-btn"]}
      onClick={showBarHandler}
    >
      <FontAwesomeIcon icon={faBars} className="h-7" />
    </button>
  );
};

export default NavMobileButton;
