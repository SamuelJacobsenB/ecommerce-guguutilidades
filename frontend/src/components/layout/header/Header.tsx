import React from 'react';
import SearchBar from '@/components/others/SearchBar/SearchBar';
import LoadImage from '@/components/others/LoadImage/LoadImage';
import './Header.css';
import { SearchType } from '@/types/SearchType';

const Header = (props: SearchType) => {
  return (
    <header className="header_area">
      <LoadImage src="/imgs/logo.jpg" alt="logo" width={120} height={120} />
      <SearchBar
        fixedProducts={props.fixedProducts}
        setProducts={props.setProducts}
      />
    </header>
  );
};

export default Header;
