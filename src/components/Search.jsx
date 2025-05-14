import React from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="w-full p-4 flex flex-col lg:flex-row gap-4 lg:gap-10 lg:justify-center lg:items-center">
      {/* Search Input */}
      <div className="w-full max-w-[1200px] h-[46px] border border-[#242121] flex items-center relative rounded">
        <input
          type="text"
          className="w-full h-full p-2 rounded"
          placeholder="Search..."
        />
        <div className="absolute right-4 text-[#388782]">
          <IoIosSearch size={22} />
        </div>
      </div>

      {/* Sort Dropdown */}
      <div className="min-w-[180px] w-max h-[46px] border border-[#ccc] rounded">
        <select className="w-full h-full p-2 appearance-none text-[#388782] cursor-pointer rounded outline-none">
          <option value="" hidden>
            Sort By
          </option>
          <option value="recent">Recent Post</option>
          <option value="old">Old Post</option>
          <option value="trending">Trending Post</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
