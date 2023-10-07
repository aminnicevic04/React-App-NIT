import React from "react";
import "./Search.css";
import SearchBar from "./comp/SearchBar";

function Search() {
  return (
    <div className="App">
      <div className="search-bar">
        <SearchBar />
        <div>search result</div>
      </div>
    </div>
  );
}

export default Search;
