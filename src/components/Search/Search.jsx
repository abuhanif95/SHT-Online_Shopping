import React from "react";
import "../Search/Search.css";

const Search = () => {
  return (
    <div className="searchBox w-full h-[50px] bg-[#d7d7d7] rounded-[5px] relative p-2">
      <input
        type="text"
        placeholder="Search Products..."
        className="w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]"
      />
    </div>
  );
};

export default Search;
