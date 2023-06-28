import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import HeroImage from "../../assets/hero.jpg";
import HeroBookImage from "../../assets/books.jpg";
import HeroFilmImage from "../../assets/film.jpg";
import HeroTechImage from "../../assets/tech.jpg";
import HeroPersonalImage from "../../assets/personal.jpg";
import HeadingOne from "../text/HeadingOne";
import styles from "./styles.module.scss";

interface Props {
  pageName: string;
  showSearch?: boolean;
  setShowFeatured?: Dispatch<SetStateAction<boolean>>;
  type: "All" | "Book" | "Film" | "Tech" | "Personal";
}

const HeroContainer: React.FC<Props> = ({
  pageName,
  showSearch,
  type,
  setShowFeatured,
}) => {
  return (
    <div className={styles["hero-container-wrapper"]}>
      <div className={styles["text-container"]}>
        <h1>{pageName}</h1>
        {showSearch && (
          <>
            <p className={styles["search-text"]}>
              Discover all of my blogs here.
            </p>
            {/* disabled for a while */}
            {/* <SearchField setShowFeatured={setShowFeatured} /> */}
          </>
        )}
      </div>
      <div className={styles["black-overlay"]}></div>
      <Image
        src={
          type === "All"
            ? HeroImage
            : type === "Book"
            ? HeroBookImage
            : type === "Film"
            ? HeroFilmImage
            : type === "Tech"
            ? HeroTechImage
            : type === "Personal"
            ? HeroPersonalImage
            : HeroImage
        }
        layout="fill"
        alt="gumrindelwald.com"
        objectFit="cover"
        className={styles["hero-image"]}
      />
    </div>
  );
};

export default HeroContainer;
