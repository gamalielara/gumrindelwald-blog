import React, { useState } from "react";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import SideBar from "../../Sidebar";
import styles from "./style.module.scss";
import NavMobileButton from "../../NavMobileButton";

interface PageContainerInterface {
  children: any;
}

const PageContainer: React.FC<PageContainerInterface> = ({ children }) => {
  const [showSideBar, setShowBar] = useState<boolean>(false);

  const props = { ...{ showSideBar } };

  return (
    <>
      <div className={styles["page-container"]}>
        <div className={styles["main-container"]}>
          <Navbar />
          <main className={styles["blog-container"]}>{children}</main>
        </div>
        <div {...props} className={styles["sidebar"]}>
          <NavMobileButton setShowBar={setShowBar} />
          <SideBar />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageContainer;
