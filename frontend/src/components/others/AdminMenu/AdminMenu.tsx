'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/header/Header';
import { SearchType } from '@/types/SearchType';
import { IoMenu } from 'react-icons/io5';
import './AdminMenu.css';

const AdminMenu = (props: SearchType) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  return (
    <div>
      <Header
        fixedProducts={props.fixedProducts}
        setProducts={props.setProducts}
      />
      <nav className="admin_nav">
        <IoMenu
          className="menu_admin_icon"
          onClick={() => setMenuVisible(!menuVisible)}
        />
        <div className={menuVisible ? `admin_nav_links` : 'disable'}></div>
      </nav>
    </div>
  );
};

export default AdminMenu;
