import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="search-bar">
        <i className="fas fa-search p-1 search-element"></i>
        <form>
          <input
            className="search-input w-100"
            type="text"
            placeholder="Search a city"
          />
        </form>
        <button className="location-element">
          <i className="fa-sharp fa-solid fa-location-dot"></i>
        </button>
        <button className="search-element">
          <i className="fa-solid fa-xmark p-1"></i>
        </button>
      </div>
    </div>
  );
}
