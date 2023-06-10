import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import CategoryBox from "../../components/article/CategoryBox";
import FlexBox from "../../components/container/FlexBox";
import PageContainer from "../../components/container/PageContainer";
import Text from "../../components/text/Text";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Tag from "../../components/article/Tag";
import HeadDocument from "../../components/HeadDocument";
import HeadingOne from "../../components/text/HeadingOne";
import { gql, GraphQLClient } from "graphql-request";
import { ArticleInterface, params } from "../../utils/vars";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../utils/firebase";
import { queryBlogs } from "../../utils/helpers";

interface Props {
  article: ArticleInterface;
}

const ArticlePage: React.FC<Props> = ({ article }) => {
  return (
    <>
      <HeadDocument
        docTitle={article.title}
        metaKeywords={article.keywords}
        heroImage={article.thumbnail_image}
        excerpt={article.excerpt}
      />
      <PageContainer>
        <article className="article-post w-full mt-4">
          <Text size="sm" center gray>
            PUBLISHED ON{" "}
            <strong>
              {new Date(article.created_at).toDateString().toUpperCase()}
            </strong>
          </Text>
          <HeadingOne center>{article.title}</HeadingOne>
          <div className="category w-fit mx-auto flex gap-4">
            <CategoryBox>{article.category}</CategoryBox>
          </div>
          <div className="hero-image-blog w-full md:h-[75vmin] h-30vh relative my-4">
            <Image
              layout="fill"
              objectFit="cover"
              src={article.thumbnail_image}
              alt="title"
              loader={({ src }) => src}
              className="rounded-lg"
            />
          </div>
          <FlexBox justify="evenly">
            <div className="article-body md:w-11/12 w-full md:pr-4 mb-8 md:mb-2">
              {article.tags && (
                <div className="tag-container flex gap-4">
                  {article.tags.split(";").map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </div>
              )}
              <div
                id="article-post"
                className="article-post"
                dangerouslySetInnerHTML={{
                  __html: article.content,
                }}
              />
            </div>
            <aside className="flex md:flex-col flex-row md:justify-start items-center md:w-1/12 gap-4 md:pt-20">
              <button className="md:w-6 md:h-6 w-5 h-5 md:mb-0 mb-2">
                <FontAwesomeIcon className="w-full h-full" icon={faTwitter} />
              </button>
              <button className="md:w-6 md:h-6 w-5 h-5 md:mb-0 mb-2">
                <FontAwesomeIcon className="w-full h-full" icon={faLinkedin} />
              </button>
              <button className="md:w-6 md:h-6 w-5 h-5 md:mb-0 mb-2">
                <FontAwesomeIcon className="w-full h-full" icon={faLink} />
              </button>
            </aside>
          </FlexBox>
        </article>
      </PageContainer>
    </>
  );
};

export default ArticlePage;

export async function getStaticPaths() {
  const blogsRef = collection(db, "blogs");
  const rawBlogs = await getDocs(blogsRef);
  const blogs = rawBlogs.docs.map((blogDoc) => ({
    ...blogDoc.data(),
    id: blogDoc.id,
  }));

  return {
    paths: blogs.map((blog: any) => {
      return {
        params: {
          slug: blog.slug,
        },
      };
    }),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: params) {
  const slug = params.slug;

  const thisBlog = await queryBlogs({ field: "slug", value: slug });

  if (thisBlog.length) {
    return {
      props: { article: thisBlog[0] },
      revalidate: 10,
    };
  }
}
