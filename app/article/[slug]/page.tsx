import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
import { Metadata } from "next";
import { Article } from "<utils>/types";
import PageContainer from "<components>/container/PageContainer";
import CategoryBox from "<components>/article/CategoryBox";
import { CATEGORY_DICTIONARIES } from "<utils>/constants";
import ApiService from "<utils>/apiService";

interface Props {
  article: Article;
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const article = await ApiService.getSingleArticle(slug);

  const { title, keywords, thumbnail_image, excerpt, createTime } = article;

  return {
    title,
    keywords,
    authors: { name: "Ara Gamaliel Boanerges", url: "https://gamalielara.com" },
    openGraph: {
      title,
      description: excerpt,
      siteName: "gumrindelwald",
      url: `https://gumrindelwald.com/article/${slug}`,
      images: thumbnail_image,
      publishedTime: createTime,
    },
  };
}

const ArticlePage: React.FC<Props> = async ({ params: { slug } }) => {
  const article = await ApiService.getSingleArticle(slug);

  return (
    <>
      <PageContainer pageName={article.slug}>
        <article className={styles["article-post-wrapper"]}>
          <p className={styles["published-on-text"]}>
            PUBLISHED ON&nbsp;
            <strong>
              {new Date(article.created_at).toDateString().toUpperCase()}
            </strong>
          </p>
          <h1 className={styles["article-title"]}>{article.title}</h1>
          <div className={styles["category-box"]}>
            <CategoryBox category={article.category}>
              {CATEGORY_DICTIONARIES[article.category]}
            </CategoryBox>
          </div>
          <div className={styles["article-thumbnail"]}>
            <Image
              layout="fill"
              objectFit="cover"
              src={article.thumbnail_image}
              alt={article.title}
              // loader={({ src }) => src}
            />
          </div>

          <div className={styles["article-body"]}>
            <div
              className={styles["article-post"]}
              dangerouslySetInnerHTML={{
                __html: article.content,
              }}
            />
          </div>
        </article>
      </PageContainer>
    </>
  );
};

export default ArticlePage;