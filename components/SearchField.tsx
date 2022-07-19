import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gql, GraphQLClient } from "graphql-request";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { setArticles } from "../redux/articlesSlice";
import { graphcms } from "../utils/vars";

const QUERY = gql`
  query MyQuery($article: String!) {
    posts(where: { title_contains: $article }) {
      category
      datePosted
      id
      slug
      title
      featured
      content {
        html
      }
      keywords
      excerpt
      thumbnail {
        url
      }
    }
  }
`;

interface Interface {
  setShowFeatured?: Dispatch<SetStateAction<boolean>>;
}

const SearchField: React.FC<Interface> = ({ setShowFeatured }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch();

  const searchArticles = async () => {
    try {
      const articles = await graphcms.request(QUERY, { article: searchQuery });
      dispatch(setArticles(articles.posts));
      console.log(articles.posts);
    } catch (err) {
      console.log(err);
    } finally {
      if (setShowFeatured) {
        if (searchQuery !== "") {
          setShowFeatured(() => false);
        } else {
          setShowFeatured(() => true);
        }
      }
    }
  };

  return (
    <div className="search md:w-1/2 w-full h-8 bg-gray-500/[.5] rounded relative mb-8 mx-auto">
      <input
        type="text"
        className="w-full h-full bg-transparent outline-none p-2 text-white placeholder-slate-200"
        placeholder="Search blogs here"
        color="white"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="search-btn absolute right-0 bg-black rounded h-full w-8 p-2"
        onClick={() => searchArticles()}
      >
        <FontAwesomeIcon icon={faSearch} className="text-white" />
      </button>
    </div>
  );
};

export default SearchField;
