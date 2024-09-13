import Image from "next/image";
import React from "react";
import ImageHero from "../assets/404.jpg";
import GWLogoWhite from "../assets/com-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./styles-404.module.scss";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "gumrindelwald / Ara Gamaliel Boanerges's Blog",
    keywords: [
      "gumrindelwald",
      "Ara Gamaliel Boanerges",
      "Ara Gamaliel Boanerges's Personal Blog",
      "Blog",
      "Buku",
      "Film",
      "Teknologi",
    ],
    authors: { name: "Ara Gamaliel Boanerges", url: "https://gamalielara.com" },
    openGraph: {
      title: "gumrindelwald",
      description: "gumrindelwald - Ara Gamaliel Boanerges's Personal Blog",
      siteName: "gumrindelwald",
      url: `https://gumrindelwald.com`,
      images:
        "https://firebasestorage.googleapis.com/v0/b/gumrindelwald-backend.appspot.com/o/images%2Fme.jpeg?alt=media",
    },
  };
}

export const dynamic = "force-static";

const NotFoundPage = () => {
  return (
    <>
      <section className={styles["not-found-container"]}>
        <div className={styles["not-found-container__image"]}>
          <div className={styles["not-found-container__gw-logo"]}>
            <Image src={GWLogoWhite} alt="gumrindelwald" objectFit="contain" />
          </div>
          <h1 className={styles["not-found-container__headingtext"]}>
            Well, it seems you are a little bit lost.
          </h1>
          <div className={styles["not-found-container__menus"]}>
            <Link
              href="/"
              className={styles["not-found-container__to-my-blog-link"]}
            >
              <span>My Blogs</span>
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4" />
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
