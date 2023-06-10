import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { MENUS } from "../../utils/vars";
import NavMenu from "./NavMenu";
import Logo from "../logo/Logo";

const Navbar: React.FC = () => {
  const route = useRouter();

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const baseClassnames =
      "sticky left-0 w-full flex p-4 bg-white z-50 transition-all duration-100 top-0";
    const becomeFlexRowClassnames =
      baseClassnames + " flex-row lg:justify-between justify-center";
    const becomeFlexColClassnames = baseClassnames + " flex-col items-center";

    if (headerRef.current) {
      if (window.scrollY > headerRef.current.clientHeight) {
        headerRef.current.className = becomeFlexRowClassnames;
      } else {
        headerRef.current.className = becomeFlexColClassnames;
      }
    }

    window.addEventListener("scroll", () => {
      if (!headerRef.current) return;
      let top = headerRef.current.clientHeight * -1;
      top += window.scrollY / 4;
      if (top <= 0 && window.scrollY > headerRef.current.clientHeight) {
        headerRef.current.style.top = `${top * 2}px`;
        headerRef.current.className = becomeFlexRowClassnames;
      }
      if (window.scrollY === 0) {
        headerRef.current.className = becomeFlexColClassnames;
        headerRef.current.style.top = `${
          headerRef.current.clientHeight * -1
        }px`;
      }
    });
  }, []);

  return (
    <header id="header" ref={headerRef}>
      <div
        className="logo-container hover:cursor-pointer scale-75"
        onClick={() => route.push("/")}
      >
        <Logo fontColor="black" isHeader />
      </div>
      <nav className="hidden lg-md:block">
        <ul className="list-none flex flex-wrap justify-center">
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
