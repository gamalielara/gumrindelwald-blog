import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchField: React.FC = () => {
  return (
    <div className="search md:w-1/2 w-full h-8 bg-gray-500/[.5] rounded relative mb-8 mx-auto">
      <input
        type="text"
        className="w-full h-full bg-transparent outline-none p-2 text-white placeholder-slate-200"
        placeholder="Search blogs here"
        color="white"
      />
      <button className="search-btn absolute right-0 bg-black rounded h-full w-8 p-2">
        <FontAwesomeIcon icon={faSearch} className="text-white" />
      </button>
    </div>
  );
};

export default SearchField;
