import Image from "next/image";
import React from "react";
import ImageHero from "../assets/404.jpg";
import HeadDocument from "../components/HeadDocument";
import GWLogoWhite from "../assets/com-white.png";
import LargeButton from "../components/LargeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <HeadDocument docTitle="Page Not Found" />
      <section className="w-screen h-screen relative">
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-full px-2 md:px-0">
          <div className="gw-logo md:w-1/2 sm:w-3/4 w-5/6 mx-auto">
            <Image src={GWLogoWhite} alt="gumrindelwald" />
          </div>
          <h1 className="lg:text-5xl md:text-3xl sm:text-xl text-base font-bold text-white text-center">
            Well, it seems you are a little bit lost.
          </h1>
          <div className="menus w-full flex justify-center mt-2 z-20">
            <LargeButton name="to-my-blog">
              <Link href="/me">
                <a className="flex text-white">
                  <FontAwesomeIcon icon={faArrowLeft} className="mr-2 w-4" />{" "}
                  About Me
                </a>
              </Link>
            </LargeButton>
            <LargeButton name="to-my-blog">
              <Link href="/blogs">
                <a className="flex text-white">
                  My Blogs
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4" />
                </a>
              </Link>
            </LargeButton>
          </div>
        </div>
        <div className="img-wrapper w-full h-full relative z-10">
          <Image
            src={ImageHero}
            alt="gumrindelwald, Ara Gamaliel's Personal Blog"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
