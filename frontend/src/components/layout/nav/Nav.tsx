'use client';

import { useState, useEffect, useCallback } from 'react';
import { IoMenu, IoCart } from 'react-icons/io5';
import { MdAccountCircle } from 'react-icons/md';
import userVerify from '@/functions/userVerify';
import getUserById from '@/functions/getUserById';
import './Nav.css';
import { jwtDecode } from 'jwt-decode';
import { User } from '@/types/UserType';
import LoadImage from './../../others/LoadImage/LoadImage';

const Nav = () => {
  const [picture, setPicture] = useState<string>('');

  const setMenuVisible = () => {
    document.querySelector('.side_box_menu')?.classList.remove('disable');
  };

  const verify = useCallback(async () => {
    const token: string | null = localStorage.getItem('token');
    if (token) {
      const res: any = await userVerify(token);

      if (res.error_msg) {
        console.log(res.error_msg);
      } else {
        const { id }: any = jwtDecode(token);
        await getUserById(token, id)
          .then((res) => {
            setPicture(res.picture);
          })
          .catch(() => {
            console.log('Erro');
          });
      }
    } else {
      console.log('Token não encontrado');
    }
  }, []);

  useEffect(() => {
    verify();
  }, []);

  return (
    <nav className="nav_bar">
      <div className="menu">
        <IoMenu className="menu_icon" onClick={setMenuVisible} />
      </div>
      <div className="nav_user_area">
        <IoCart className="cart_icon" />
        <div className="user_icon_area">
          <MdAccountCircle
            className={picture != '' ? 'disable' : 'user_icon'}
          />
          <LoadImage
            src={picture}
            alt="user_image"
            width={40}
            height={40}
            className={picture == '' ? 'disable' : 'user_icon'}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
