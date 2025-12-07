import React from "react";
import "../Search/Search.css";
import Button from "@mui/material/Button";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="searchBox w-full h-[50px] bg-[#e5e5e5] rounded-lg relative p-2">
      <input
        type="text"
        placeholder="Search Products..."
        className="w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]"
      />

      <Button className="absolute! top-1/2 right-[7px] -translate-y-1/2 h-[35px] min-w-[35px]! w-[35px] rounded-full! text-black!">
        <FaSearch className="text-[24px] text-[#3c3c3c]" />
      </Button>
    </div>
  );
};

export default Search;
