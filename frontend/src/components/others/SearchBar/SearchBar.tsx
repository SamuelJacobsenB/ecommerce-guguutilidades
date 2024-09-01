import React from 'react';
import { IoSearch } from 'react-icons/io5';
import './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className="search_area">
      <form>
        <input type="search" name="search" className="search_input" />
        <button type="submit" className="search_button">
          <IoSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
