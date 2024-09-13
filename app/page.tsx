import React from "react";
import BlogsPage from "./components/pageComponent/BlogsPage";
import { Metadata } from "next";

export const dynamic = "force-static";

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

const Page = () => {
  return <BlogsPage />;
};

export default Page;
