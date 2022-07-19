import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/navbar/Navbar";
import NavMobileButton from "../button/NavMobileButton";
import SideBar from "../navbar/SideBar";

interface PageContainerInterface {
  children: any;
}

const PageContainer: React.FC<PageContainerInterface> = ({ children }) => {
  const [showSideBar, setShowBar] = useState<boolean>(false);
  return (
    <>
      <div className="page-container w-full flex md:block">
        <div className="main-container">
          <Navbar />
          <main className="blog-container px-4 xl:w-5/6 w-full min-h-screen mx-auto">
            {children}
          </main>
        </div>
        <div
          className={`sidebar w-fit h-screen fixed bottom-0 ${
            !showSideBar ? "right-0" : "right-3/4"
          } flex lg-md:hidden items-end transition-all duration-700 ease-in-out z-50`}
        >
          <NavMobileButton setShowBar={setShowBar} />
          <SideBar />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageContainer;
