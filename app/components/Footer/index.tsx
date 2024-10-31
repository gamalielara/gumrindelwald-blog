import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import whiteLogoImage from "<assets>/com-white.png";
import blackLogoImage from "<assets>/com-black.png";
import {
  faInstagram,
  faInternetExplorer,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./styles.module.scss";
import { getColorTheme } from "<app>/actions";
import { AppThemeColor, colorTheme } from "<utils>/constants";

const Footer: React.FC = async () => {
  const thisYear = new Date().getFullYear();
  const themeColorCookieValue = await getColorTheme();

  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-wrapper"]}>
        <Image
          src={
            themeColorCookieValue === AppThemeColor.DUNKEL
              ? whiteLogoImage
              : blackLogoImage
          }
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
        </a>{" "}
        in 2021.
      </span>

      <div className={styles["social-media"]}>
        <a
          href="https://www.instagram.com/gamalielboanerges/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            color={colorTheme[themeColorCookieValue].textColor}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/aragamaliel/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color={colorTheme[themeColorCookieValue].textColor}
          />
        </a>
        <a href="https://gamalielara.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faInternetExplorer}
            color={colorTheme[themeColorCookieValue].textColor}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
