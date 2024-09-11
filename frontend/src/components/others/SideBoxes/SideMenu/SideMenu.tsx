'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import SideBox from '../SideBox';
import {
  IoHome,
  IoAdd,
  IoLogIn,
  IoLogOut,
  IoMail,
  IoPerson,
} from 'react-icons/io5';
import adminVerify from '@/functions/adminVerify';
import './SideMenu.css';

const SideMenu = () => {
  const [ifAdmin, setIfAdmin] = useState<boolean>(false);
  const token: string | null = window.localStorage.getItem('token');

  const verify = useCallback(async () => {
    if (token) {
      const res: any = await adminVerify(token);
      if (!res.error_msg) setIfAdmin(true);
    }
  }, []);

  useEffect(() => {
    verify();
  }, [verify]);

  return (
    <SideBox className="side_box_menu">
      <Link href={`/home`} className="menu_link">
        <IoHome className="menu_icon_box" /> Principal
      </Link>
      <Link href={`/signup`} className="menu_link">
        <IoAdd className="menu_icon_box" /> Criar conta
      </Link>
      <Link href={`/login`} className="menu_link">
        <IoLogIn className="menu_icon_box" /> Entrar
      </Link>
      <div
        className="menu_link"
        onClick={() => {
          localStorage.removeItem('token');
          window.location.reload();
        }}
      >
        <IoLogOut className="menu_icon_box" /> Sair
      </div>
      <Link href={`/about`} className="menu_link">
        <IoMail className="menu_icon_box" /> Sobre nós
      </Link>
      <Link href={`/admin`} className={ifAdmin ? `menu_link` : 'disable'}>
        <IoPerson className="menu_icon_box" /> Administrador
      </Link>
    </SideBox>
  );
};

export default SideMenu;
