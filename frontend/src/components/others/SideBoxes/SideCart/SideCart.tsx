'use client';

import { useState, useRef, ReactNode } from 'react';
import { IoClose, IoAddCircle, IoRemoveCircle } from 'react-icons/io5';
import { CartType } from '@/types/CartType';
import { Product } from '@/types/ProductType';
import LoadImage from '../../LoadImage/LoadImage';
import './SideCart.css';

const SideCart = (props: CartType) => {
  const fixedProducts: Product[] = props.fixedProducts;
  const cart: string[] | undefined = props.cart?.split(';');
  const SideCartDiv: any = useRef();

  const handleCloseSideCart = (): void =>
    SideCartDiv.current.classList.add('disable');

  return (
    <div className={`side_cart disable`} ref={SideCartDiv}>
      <div>
        <IoClose
          className="close_side_cart_icon"
          onClick={handleCloseSideCart}
        />
      </div>
      <div className="side_cart_content">
        {cart?.map((cartItem: string) => {
          const itemParts: string[] = cartItem.split(':');
          const id: number = Number(itemParts[0]);
          const [quantity, setQuantity] = useState<number>(
            Number(itemParts[1]),
          );

          const product: Product[] | undefined = fixedProducts.filter(
            (product: Product) => product.id == id,
          );

          const { picture, name, price }: Product = product[0];

          const [waitImage, setWaitImage] = useState<boolean>(true);
          setTimeout(() => setWaitImage(false), 500);

          return (
            <div className="cart_product" key={id}>
              {waitImage ? (
                'Loading'
              ) : (
                <LoadImage src={picture} alt={name} width={120} height={180} />
              )}

              <div className="cart_info">
                <div className="top_informations">
                  <h3>{name}</h3>
                  <IoClose className="remove_product" />
                </div>
                <div className="down_informations">
                  <big>R$ {price.toFixed(2)}</big>
                  <div className="cart_quantity_area">
                    <IoRemoveCircle
                      className="quantity_cart_btn"
                      onClick={() => {
                        if (quantity != 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
                    />
                    <small>{quantity}</small>
                    <IoAddCircle
                      className="quantity_cart_btn"
                      onClick={() => setQuantity(quantity + 1)}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideCart;
