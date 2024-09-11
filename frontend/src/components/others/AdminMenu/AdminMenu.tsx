'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/header/Header';
import { SearchType } from '@/types/SearchType';
import { IoMenu, IoHome, IoAdd, IoPencil } from 'react-icons/io5';
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
        <div className={menuVisible ? `admin_nav_links` : 'disable'}>
          <Link href={`/home`} className="admin_menu_link">
            <IoHome className="admin_menu_icon_box" /> Principal
          </Link>
          <Link href={`/admin/create`} className="admin_menu_link">
            <IoAdd className="admin_menu_icon_box" /> Cadastrar produto
          </Link>
          <Link href={`/admin/modify`} className="admin_menu_link">
            <IoPencil className="admin_menu_icon_box" /> Modificar produtos
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default AdminMenu;
