import React from "react";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import styles from "./style.module.scss";

interface PageContainerInterface {
  children: any;
  noFooter?: boolean;
  isInLP?: boolean;
}

const PageContainer: React.FC<PageContainerInterface> = ({
  children,
  noFooter,
  isInLP,
}) => {
  return (
    <>
      <main className={styles["page-container"]}>
        <div className={styles["main-container"]}>
          <Navbar isInLandingPage={isInLP} />
          <div className={styles["blog-container"]}>{children}</div>
        </div>
      </main>
      {!noFooter && <Footer />}
    </>
  );
};

export default PageContainer;
