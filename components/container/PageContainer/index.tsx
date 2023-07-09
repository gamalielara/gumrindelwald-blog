import React, { useEffect, useState } from "react";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import SideBar from "../../Sidebar";
import NavMobileButton from "../../Navbar/NavbarMobileButton";
import styles from "./style.module.scss";

interface PageContainerInterface {
  children: any;
  noFooter?: boolean;
  pageName: string;
}

const PageContainer: React.FC<PageContainerInterface> = ({
  children,
  noFooter,
  pageName,
}) => {
  const [showSideBar, setShowBar] = useState<boolean>(false);

  return (
    <>
      <div className={styles["page-container"]}>
        <div className={styles["main-container"]}>
          <Navbar />
          <main className={styles["blog-container"]} data-page={pageName}>
            {children}
          </main>
        </div>
        <div
          style={{ right: showSideBar ? "75%" : 0 }}
          className={styles["sidebar"]}
        >
          <NavMobileButton setShowBar={setShowBar} />
          <SideBar />

          <div
            style={{ visibility: showSideBar ? "visible" : "hidden" }}
            className={styles["bg-mask"]}
            onClick={() => setShowBar((state) => !state)}
          />
        </div>
      </div>
      {!noFooter && <Footer />}
    </>
  );
};

export default PageContainer;
