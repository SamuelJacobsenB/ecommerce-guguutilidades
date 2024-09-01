import React from 'react';
import SearchBar from '@/components/others/SearchBar/SearchBar';
import LoadImage from '@/components/others/LoadImage/LoadImage';
import './Header.css';

const Header = () => {
  return (
    <header className="header_area">
      <LoadImage src="/imgs/logo.jpg" alt="logo" width={120} height={120} />
      <SearchBar />
    </header>
  );
};

export default Header;
