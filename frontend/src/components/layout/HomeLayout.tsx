'use client';

import { useState, useEffect, useCallback } from 'react';
import Header from '@/components/layout/header/Header';
import Nav from '@/components/layout/nav/Nav';
import SideMenu from '@/components/others/SideBoxes/SideMenu/SideMenu';
import SideCart from '../others/SideBoxes/SideCart/SideCart';
import { jwtDecode } from 'jwt-decode';
import userVerify from '@/functions/userVerify';
import getUserById from '@/functions/getUserById';
import { SearchType } from '@/types/SearchType';

const HomeLayout = (props: SearchType) => {
  const [verified, setVerified] = useState<boolean>(false);
  const [picture, setPicture] = useState<string>('');
  const [cart, setCart] = useState<string | null>();

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
            setCart(res.cart);
            setVerified(true);
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
  }, [verify]);

  return (
    <>
      <Header
        fixedProducts={props.fixedProducts}
        setProducts={props.setProducts}
      />
      <Nav picture={picture} />
      <div className="interactive_boxes">
        <SideMenu />
        {verified && (
          <SideCart cart={cart} fixedProducts={props.fixedProducts} />
        )}
      </div>
    </>
  );
};

export default HomeLayout;
