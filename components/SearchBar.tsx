"use client";
import React, { useState } from "react";
import SearchMenuFacture from "./SearchMenuFacture";

const SearchBar = () => {
  const [menuFacture, setMenuFacture] = useState("");
  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenuFacture
          menuFacture={menuFacture}
          setMenuFacture={setMenuFacture}
        />
      </div>
    </form>
  );
};

export default SearchBar;
