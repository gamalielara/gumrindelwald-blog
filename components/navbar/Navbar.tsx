import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useLayoutEffect } from "react";
import LogoWhite from "../../assets/logo-white.png";
import { MENUS } from "../../utils/vars";
import NavMenu from "./NavMenu";

const Navbar: React.FC = () => {
  const route = useRouter();

  useLayoutEffect(() => {
    const header = document.getElementById("header");
    if (header) {
      if (window.scrollY > header.clientHeight) {
        header.style.top = "0";
      }

      window.addEventListener("scroll", () => {
        let top = header.clientHeight * -1;
        top += window.scrollY / 2.5;
        if (top <= 0 && window.scrollY > header.clientHeight) {
          header.style.top = `${top * 2}px`;
        }
        if (window.scrollY === 0) {
          header.style.top = `${header.clientHeight * -1}px`;
        }
      });
    }
  });

  return (
    <header
      className="sticky left-0 w-full flex flex-row sm:flex-col lg:flex-row items-center p-4 bg-white z-50 transition-all duration-100"
      id="header"
    >
      <div
        className="logo-container xl:w-[15%] lg:w-[25%] md:w-[40%] w-[50%] lg:mx-0 lg:mr-auto mx-auto hover:cursor-pointer"
        onClick={() => route.push("/")}
      >
        <Image src={LogoWhite} alt="gumrindelwald logo" />
      </div>
      <nav className="hidden lg-md:block">
        <ul className="list-none flex flex-wrap justify-around">
          {MENUS.map((menu) => (
            <Link href={menu.url} key={menu.name}>
              <a>
                <NavMenu>{menu.name}</NavMenu>
              </a>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
