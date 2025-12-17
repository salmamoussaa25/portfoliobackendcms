import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <img src="../assets/search_icon" alt="search icon" />
      <input 
        type="text" 
        placeholder="Search here..." 
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;