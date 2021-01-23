import React from "react";
import "./SearchBar.css";
function SearchBar() {
  return (
    <form class="form">
      <div class="myButton">
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
      <input
        class="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
  );
}

export default SearchBar;
