import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search_area">
      <form>
        <input
          type="text"
          name="search"
          className="search_input"
          placeholder="Busque por produtos"
        />
        <button type="reset" className="delete_button">
          <IoClose className="close_icon" />
        </button>
        <button type="submit" className="search_button">
          <IoSearch className="search_icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
