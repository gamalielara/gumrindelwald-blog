import React from "react";
import Head from "next/head";

interface IHeadDocumentProps {
  docTitle: string;
  metaKeywords: string;
  excerpt: string;
  heroImage: string;
  isLandingPage: boolean;
}

const HeadDocument: React.FC<Partial<IHeadDocumentProps>> = ({
  docTitle,
  metaKeywords,
  excerpt,
  heroImage,
  isLandingPage,
}) => {
  return (
    <Head>
      <title>
        {isLandingPage
          ? "gumrindelwald - Ara Gamaliel Boanerges's Blog"
          : `${docTitle} / gumrindelwald`}
      </title>
      <meta name="color-scheme" content="light only"></meta>
      <meta
        name="description"
        content={
          excerpt || "gumrindelwald - Ara Gamaliel Boanerges's personal blog"
        }
      />
      <meta name="author" content="Ara Gamaliel Boanerges" />
      <meta
        name="keywords"
        content={`Ara Gamaliel, Ara Gamaliel Boanerges, Gamaliel, gumrindelwald${
          metaKeywords ? `, ${metaKeywords}` : ""
        }`}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="www.gumrindelwald.com" />
      <meta name="twitter:creator" content="@gumrindelwald" />
      <meta property="og:url" content="https://gumrindelwald.com" />
      <meta
        property="og:title"
        content={
          isLandingPage
            ? "gumrindelwald - Ara Gamaliel Boanerges's Blog"
            : `${docTitle} / gumrindelwald`
        }
      />
      <meta
        property="og:description"
        content={
          excerpt ||
          "gumrindelwald is Ara Gamaliel Boanerges's personal blog. He talks about books, films, technologies and his thoughts in this blog."
        }
      />
      <meta
        property="og:image"
        content={
          heroImage ||
          "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/9bhuiwYLRLSpCQeqEjiP"
        }
      />
      {isLandingPage && <link rel="preload" href="/lp-rain-2.mp4" as="video" />}
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <script
        async
        src="https://kit.fontawesome.com/8af159f785.js"
        crossOrigin="anonymous"
      ></script>
      {isLandingPage && (
        <style>
          {`body {
            overflow: hidden
          }`}
        </style>
      )}
    </Head>
  );
};

export default HeadDocument;
