import Image from "next/image";
import React from "react";
import ImageHero from "../assets/404.jpg";
import HeadDocument from "../components/HeadDocument";
import GWLogoWhite from "../assets/com-white.png";
import LargeButton from "../components/LargeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./styles-404.module.scss";

const NotFoundPage = () => {
  return (
    <>
      <HeadDocument docTitle="Page Not Found" />
      <section className={styles["not-found-container"]}>
        <div className={styles["not-found-container__image"]}>
          <div className={styles["not-found-container__gw-logo"]}>
            <Image src={GWLogoWhite} alt="gumrindelwald" />
          </div>
          <h1 className={styles["not-found-container__headingtext"]}>
            Well, it seems you are a little bit lost.
          </h1>
          <div className={styles["not-found-container__menus"]}>
            <Link href="/blogs">
              <a className={styles["not-found-container__to-my-blog-link"]}>
                My Blogs
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4" />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles["not-found-container__image-wrapper"]}>
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
