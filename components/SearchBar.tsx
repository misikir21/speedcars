"use client";
import React from "react";
import { SearchManufacturer } from ".";

function SearchBar() {
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer />
      </div>
    </form>
  );
}

export default SearchBar;
