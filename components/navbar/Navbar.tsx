import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import LogoBlack from "../../assets/logo-black.png";
import LogoWhite from "../../assets/logo-white.png";
import { MENUS } from "../../utils/vars";
import NavMenu from "./NavMenu";

const Navbar: React.FC = () => {
  const route = useRouter();
  const [isBlackTheme, setIsBlackTheme] = useState<boolean>(false);

  useLayoutEffect(() => {
    const header = document.getElementById("header");
    if (header) {
      if (window.scrollY > header.clientHeight) {
        header.style.top = "0";
      }

      window.addEventListener("scroll", () => {
        let top = header.clientHeight * -1;
        top += window.scrollY / 5;
        if (top <= 0 && window.scrollY > header.clientHeight) {
          header.style.top = `${top}px`;
        }
        if (window.scrollY === 0) {
          header.style.top = `${header.clientHeight * -1}px`;
        }
      });
    }
  });

  useEffect(
    () =>
      setIsBlackTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ),
    []
  );

  return (
    <header
      className="sticky left-0 w-full flex items-center p-4 bg-white z-50 transition-all duration-100"
      id="header"
    >
      <div
        className="logo-container lg-md:w-[15%] md:w-[30%] w-[50%] lg-md:mx-0 lg-md:mr-auto mx-auto hover:cursor-pointer"
        onClick={() => route.push("/")}
      >
        {isBlackTheme ? (
          <Image src={LogoWhite} alt="gumrindelwald logo" />
        ) : (
          <Image src={LogoBlack} alt="gumrindelwald logo" />
        )}
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
