'use client';

import { useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { CartType } from '@/types/CartType';
import './SideCart.css';

const SideCart = (props: CartType) => {
  const SideCartDiv: any = useRef();

  const handleCloseSideCart = (): void => {
    SideCartDiv.current.classList.add('disable');
  };

  return (
    <div className={`side_cart disable`} ref={SideCartDiv}>
      <div>
        <IoClose
          className="close_side_cart_icon"
          onClick={handleCloseSideCart}
        />
      </div>
      <div className="side_cart_content">{props.cart}</div>
    </div>
  );
};

export default SideCart;
