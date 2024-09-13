'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IoMenu, IoHome, IoPencil, IoAdd } from 'react-icons/io5';
import './AdminNav.css';

const AdminNav = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  return (
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
  );
};

export default AdminNav;
