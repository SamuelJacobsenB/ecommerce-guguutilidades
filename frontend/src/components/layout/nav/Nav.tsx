'use client';

import { useRouter } from 'next/navigation';
import { IoMenu, IoCart } from 'react-icons/io5';
import { MdAccountCircle } from 'react-icons/md';
import userVerify from '@/functions/userVerify';
import LoadImage from './../../others/LoadImage/LoadImage';
import './Nav.css';

const Nav = ({ picture }: { picture: string }) => {
  const router = useRouter();

  const setMenuVisible = () => {
    document.querySelector('.side_cart')?.classList.add('disable');
    document.querySelector('.side_box_menu')?.classList.remove('disable');
  };

  const setVisibleSideCart = async () => {
    const token: string | null = localStorage.getItem('token');
    if (token) {
      const res: any = await userVerify(token);

      if (res.error_msg) {
        console.log(res.error_msg);
      } else {
        document.querySelector('.side_box_menu')?.classList.add('disable');
        document.querySelector('.side_cart')?.classList.remove('disable');
      }
    } else {
      console.log('Você deve estar logado');
    }
  };

  return (
    <nav className="nav_bar">
      <div className="menu">
        <IoMenu className="menu_icon" onClick={setMenuVisible} />
      </div>
      <div className="nav_user_area">
        <IoCart className="cart_icon" onClick={setVisibleSideCart} />
        <div className="user_icon_area">
          <MdAccountCircle
            className={picture ? 'disable' : 'user_icon'}
            onClick={() => router.push('/login')}
          />
          <LoadImage
            src={picture}
            alt="user_image"
            width={44}
            height={44}
            className={!picture ? 'disable' : 'user_icon profile_image'}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
