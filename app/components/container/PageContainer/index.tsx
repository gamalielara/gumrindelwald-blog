import React from "react";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import styles from "./style.module.scss";
import { MENUS } from "<utils>/constants";

interface PageContainerInterface {
  children: any;
  noFooter?: boolean;
  isInLP?: boolean;
  selectedRoute?: (typeof MENUS)[keyof typeof MENUS]["url"];
}

const PageContainer: React.FC<PageContainerInterface> = ({
  children,
  noFooter,
  isInLP,
  selectedRoute,
}) => {
  return (
    <>
      <main className={styles["page-container"]}>
        <div className={styles["main-container"]}>
          <Navbar isInLandingPage={isInLP} selectedRoute={selectedRoute} />
          <div className={styles["blog-container"]}>{children}</div>
        </div>
      </main>
      {!noFooter && <Footer />}
    </>
  );
};

export default PageContainer;
