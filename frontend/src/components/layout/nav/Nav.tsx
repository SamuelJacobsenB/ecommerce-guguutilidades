'use client';

import { IoMenu, IoCart } from 'react-icons/io5';
import { MdAccountCircle } from 'react-icons/md';
import './Nav.css';

const Nav = () => {
  const setMenuVisible = () => {
    document.querySelector('.side_box_menu')?.classList.remove('disable');
  };

  return (
    <nav className="nav_bar">
      <div className="menu">
        <IoMenu className="menu_icon" onClick={setMenuVisible} />
      </div>
      <div className="nav_user_area">
        <IoCart className="cart_icon" />
        <MdAccountCircle className="user_icon" />
      </div>
    </nav>
  );
};

export default Nav;
