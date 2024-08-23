import React from "react";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import styles from "./style.module.scss";

interface PageContainerInterface {
  children: any;
  noFooter?: boolean;
  pageName: string;
  isInLP?: boolean;
}

const PageContainer: React.FC<PageContainerInterface> = ({
  children,
  noFooter,
  pageName,
  isInLP,
}) => {
  return (
    <>
      <main className={styles["page-container"]}>
        <div className={styles["main-container"]}>
          <Navbar isInLandingPage={isInLP} />
          <div className={styles["blog-container"]} data-page={pageName}>
            {children}
          </div>
        </div>
      </main>
      {!noFooter && <Footer />}
    </>
  );
};

export default PageContainer;
