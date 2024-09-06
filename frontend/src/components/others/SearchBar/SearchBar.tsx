'use client';

import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import './SearchBar.css';
import { SearchType } from '@/types/SearchType';
import { Product } from '@/types/ProductType';

const SearchBar = (props: SearchType) => {
  const [searchValue, setSearchValue] = useState<string>();
  const { fixedProducts, setProducts }: SearchType = props;

  const handleSearchProducts = (evt: any) => {
    evt.preventDefault();

    let correctProducts: Product[] = fixedProducts;

    if (searchValue) {
      correctProducts = correctProducts.filter((product: Product) => {
        if (product.name.toLowerCase().includes(searchValue.toLowerCase())) {
          return product;
        }
      });
    }

    setProducts(correctProducts);
  };

  const handleResetSearchValue = () => {
    setSearchValue('');
    setProducts(fixedProducts);
  };

  return (
    <div className="search_area">
      <form>
        <input
          type="text"
          name="search"
          className="search_input"
          placeholder="Busque por produtos"
          value={searchValue}
          onChange={(evt) => setSearchValue(evt.target.value)}
        />
        <button
          type="reset"
          className="delete_button"
          onClick={handleResetSearchValue}
        >
          <IoClose className="close_icon" />
        </button>
        <button
          type="submit"
          className="search_button"
          onClick={(evt) => handleSearchProducts(evt)}
        >
          <IoSearch className="search_icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
