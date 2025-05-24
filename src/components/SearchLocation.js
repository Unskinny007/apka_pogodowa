import React from "react";
import "../App.css";
import LastSearching from "./LastSearching";

const SearchLocation = () => {
  return (
    <div className="search-section">
      <form className="form">
        <label>Miasto:</label>
        <input type="text" placeholder="Wpisz miasto..."></input>
      </form>
      <LastSearching />
    </div>
  );
};
export default SearchLocation;
