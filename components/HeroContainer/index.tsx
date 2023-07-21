import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import HeroImage from "../../assets/hero.jpg";
import HeroBookImage from "../../assets/books.jpg";
import HeroFilmImage from "../../assets/film.jpg";
import HeroTechImage from "../../assets/tech.jpg";
import HeroPersonalImage from "../../assets/personal.jpg";
import styles from "./styles.module.scss";

interface Props {
  pageName: string;
  showSearch?: boolean;
  setShowFeatured?: Dispatch<SetStateAction<boolean>>;
  type: "All" | "Book" | "Film" | "Tech" | "Personal";
}

const HeroContainer: React.FC<Props> = ({ pageName, showSearch, type }) => {
  const decideImage = (type: string) => {
    switch (type) {
      case "Book":
        return HeroBookImage;
      case "Film":
        return HeroFilmImage;
      case "Tech":
        return HeroTechImage;
      case "Personal":
        return HeroPersonalImage;
      default:
        return HeroImage;
    }
  };
  return (
    <div className={styles["hero-container-wrapper"]}>
      <div className={styles["text-container"]}>
        <h1>{pageName}</h1>
        {showSearch && (
          <>
            <p className={styles["search-text"]}>
              Discover all of my blogs here.
            </p>
          </>
        )}
      </div>
      <div className={styles["black-overlay"]}></div>
      <Image
        src={decideImage(type)}
        layout="fill"
        alt="gumrindelwald.com"
        objectFit="cover"
        className={styles["hero-image"]}
      />
    </div>
  );
};

export default HeroContainer;
