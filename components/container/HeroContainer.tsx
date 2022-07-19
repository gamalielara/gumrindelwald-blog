import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import HeroImage from "../../assets/hero.jpg";
import HeroBookImage from "../../assets/books.jpg";
import HeroFilmImage from "../../assets/film.jpg";
import HeroTechImage from "../../assets/tech.jpg";
import HeroPersonalImage from "../../assets/personal.jpg";
import SearchField from "../SearchField";
import HeadingOne from "../text/HeadingOne";

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
    <div className="w-full md:h-50vh h-30vh relative mt-2 sm:mt-4 md:mt-8">
      <div className="text-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 md:w-full w-5/6 text-white">
        <HeadingOne center>{pageName}</HeadingOne>
        {showSearch && (
          <>
            <p className="text-center md:mb-4 md-0 md:text-base text-sm">
              Discover all of my blogs here.
            </p>
            <SearchField setShowFeatured={setShowFeatured} />
          </>
        )}
      </div>
      <div className="bg-black opacity-50 w-full h-full absolute z-10 rounded-lg"></div>
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
        className="rounded-lg"
      />
    </div>
  );
};

export default HeroContainer;
