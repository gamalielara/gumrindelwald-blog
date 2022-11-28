import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, {useEffect} from "react";
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

interface Props {
  article: ArticleInterface;
}

const graphcms = new GraphQLClient(
  "https://api-us-west-2.graphcms.com/v2/cl5dq8ppt07xo01ugcv3v3iv0/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      category
      datePosted
      id
      slug
      title
      content {
        html
      }
      keywords
      excerpt
      tags
      language
      thumbnail {
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

const ArticlePage: React.FC<Props> = ({ article }) => {

  return (
    <>
      <HeadDocument
        docTitle={article.title}
        metaKeywords={article.keywords}
        heroImage={article.thumbnail.url}
        excerpt={article.excerpt}
      />
      <PageContainer>
        <article className="article-post w-full mt-4">
          <Text size="sm" center gray>
            PUBLISHED ON{" "}
            <strong>
              {new Date(article.datePosted).toDateString().toUpperCase()}
            </strong>
          </Text>
          <HeadingOne center>{article.title}</HeadingOne>
          <div className="category w-fit mx-auto flex gap-4">
            {article.category.map((c, i) => (
              <CategoryBox key={i}>{c}</CategoryBox>
            ))}
          </div>
          <div className="hero-image-blog w-full md:h-[75vmin] h-30vh relative my-4">
            <Image
              layout="fill"
              objectFit="cover"
              src={article.thumbnail.url}
              alt="title"
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
                  __html: article.content.html,
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
  const { posts } = await graphcms.request(SLUGLIST);

  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: params) {
  const slug = params.slug;
  const query = await graphcms.request(QUERY, { slug });
  return {
    props: { article: query.post },
    revalidate: 10,
  };
}
