'use client';

import { IoMenu } from 'react-icons/io5';
import { IoCart } from 'react-icons/io5';
import { IoPerson } from 'react-icons/io5';
import './Nav.css';

const Nav = () => {
  const setMenuVisible = () => {
    document.querySelector('.disable')?.classList.remove('disable');
  };

  return (
    <nav className="nav_bar">
      <div className="menu">
        <IoMenu className="menu_icon" onClick={setMenuVisible} />
      </div>
      <div className="nav_user_area">
        <IoCart className="cart_icon" />
        <IoPerson className="user_icon" />
      </div>
    </nav>
  );
};

export default Nav;
