import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import BlackLogoImage from "<assets>/com-white.png";
import {
  faInstagram,
  faInternetExplorer,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  const thisYear = new Date().getFullYear();
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-wrapper"]}>
        <Image
          src={BlackLogoImage}
          alt="gumrindelwald.com"
          layout="responsive"
        />
      </div>

      <span className={styles["footer-desc"]}>
        gumrindelwald v{process.env.REACT_APP_VERSION ?? "3.0"}. Copyright
        &copy;
        {thisYear}. This website is fully created by
        <a href="https://gamalielara.com" target="_blank" rel="noreferrer">
          Ara Gamaliel Boanerges
        </a>
      </span>

      <div className={styles["social-media"]}>
        <a
          href="https://www.instagram.com/gamalielboanerges/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="https://www.linkedin.com/in/aragamaliel/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://gamalielara.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInternetExplorer} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
