import React from "react";
import { Metadata, NextPage } from "next";
import CategoryPage from "<components>/pageComponent/CategoryPage";
import { Category, MENUS } from "<utils>/constants";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "gumrindelwald / Personal Thoughts Blogs",
    keywords: [
      "gumrindelwald",
      "gumrindelwald Personal Thoughts blogs",
      "Personal Thoughts blogs",
      "Ara Gamaliel Boanerges",
      "Ara Gamaliel Boanerges's Personal Blog",
      "Blog",
      "Buku",
      "Film",
      "Teknologi",
    ],
    authors: { name: "Ara Gamaliel Boanerges", url: "https://gamalielara.com" },
    openGraph: {
      title: "gumrindelwald / Personal Thoughts Blogs",
      description: "gumrindelwald - Personal Thoughts Blogs",
      siteName: "gumrindelwald",
      url: `https://gumrindelwald.com`,
      images:
        "https://firebasestorage.googleapis.com/v0/b/gumrindelwald-backend.appspot.com/o/images%2Fme.jpeg?alt=media",
    },
  };
}

const PersonalThoughtsCategoryPage: NextPage = () => {
  return (
    <CategoryPage
      category={Category.PERSONAL_THOUGHTS}
      route={MENUS[Category.PERSONAL_THOUGHTS].url}
    />
  );
};

export default PersonalThoughtsCategoryPage;
