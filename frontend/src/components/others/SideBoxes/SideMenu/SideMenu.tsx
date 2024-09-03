import Link from 'next/link';
import SideBox from '../SideBox';
import { IoHome, IoAdd, IoLogIn, IoLogOut, IoMail } from 'react-icons/io5';
import './SideMenu.css';

const SideMenu = () => {
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
      <Link href={`/logout`} className="menu_link">
        <IoLogOut className="menu_icon_box" /> Sair
      </Link>
      <Link href={`/about`} className="menu_link">
        <IoMail className="menu_icon_box" /> Sobre nós
      </Link>
    </SideBox>
  );
};

export default SideMenu;
