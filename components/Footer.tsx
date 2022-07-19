import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import BlackLogoImage from "../assets/com-white.png";
import {
  faInstagram,
  faInternetExplorer,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="w-full h-30vh bg-black flex flex-col items-center justify-center mt-8 z-50 p-4">
      <div className="lg:w-1/4 md:w-2/3 w-3/4">
        <Image
          src={BlackLogoImage}
          alt="gumrindelwald.com"
          layout="responsive"
        />
      </div>

      <span className="text-white text-center my-2 text-base md:text-xl">
        Copyright &copy;{thisYear}. This website is fully created by
        <a
          href="https://gamalielara.com"
          target="_blank"
          className="underline ml-2"
          rel="noreferrer"
        >
          Ara Gamaliel Boanerges
        </a>
      </span>

      <div className="social-medias mt-2 w-1/2 md:justify-center justify-evenly gap-4 md:gap-8 flex">
        <a
          className="text-white text-lg w-5 h-5 inline-block"
          href="https://twitter.com/gumrindelwald"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} className="md:w-6 md:h-6 w-4 h-4" />
        </a>
        <a
          className="text-white text-lg w-5 h-5 inline-block"
          href="https://www.instagram.com/gamalielboanerges/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="md:w-6 md:h-6 w-4 h-4"
          />
        </a>

        <a
          className="text-white text-lg w-5 h-5 inline-block"
          href="https://www.linkedin.com/in/aragamaliel/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="md:w-6 md:h-6 w-4 h-4"
          />
        </a>
        <a
          className="text-white text-lg w-5 h-5 inline-block"
          href="https://gamalielara.com"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faInternetExplorer}
            className="md:w-6 md:h-6 w-4 h-4"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
