import React from "react";
import { Metadata, NextPage } from "next";
import CategoryPage from "<components>/pageComponent/CategoryPage";
import { Category, MENUS } from "<utils>/constants";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "gumrindelwald / Technology Blogs",
    keywords: [
      "gumrindelwald",
      "gumrindelwald Technology blogs",
      "Technology blogs",
      "Ara Gamaliel Boanerges",
      "Ara Gamaliel Boanerges's Personal Blog",
      "Blog",
      "Buku",
      "Film",
      "Teknologi",
    ],
    authors: { name: "Ara Gamaliel Boanerges", url: "https://gamalielara.com" },
    openGraph: {
      title: "gumrindelwald / Technology Blogs",
      description: "gumrindelwald - Technology Blogs",
      siteName: "gumrindelwald",
      url: `https://gumrindelwald.com`,
      images:
        "https://firebasestorage.googleapis.com/v0/b/gumrindelwald-backend.appspot.com/o/images%2Fme.jpeg?alt=media",
    },
  };
}

const TechnologyPage: NextPage = () => {
  return (
    <CategoryPage
      category={Category.TECHNOLOGY}
      route={MENUS[Category.TECHNOLOGY].url}
    />
  );
};

export default TechnologyPage;
