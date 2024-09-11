'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { IoClose, IoAddCircle, IoAdd, IoRemoveCircle } from 'react-icons/io5';
import { CartType } from '@/types/CartType';
import { Product } from '@/types/ProductType';
import LoadImage from '../../LoadImage/LoadImage';
import deleteOneFromUserCart from '@/functions/deleteOneFromUserCart';
import updateCartQuantity from '@/functions/updateCartQuantity';
import './SideCart.css';

const SideCart = (props: CartType) => {
  const [totalPrice, setTotalPrice] = useState<number>();

  const fixedProducts: Product[] = props.fixedProducts;
  const cart: string[] | undefined = props.cart?.split(';');
  const SideCartDiv: any = useRef();

  const handleCloseSideCart = (): void =>
    SideCartDiv.current.classList.add('disable');

  const setPrice = () => {
    if (props.cart != null) {
      const HTMLprices: NodeListOf<Element> =
        document.querySelectorAll('.price_cart');
      const HTMLquantities: NodeListOf<Element> =
        document.querySelectorAll('.quantity');

      const prices: number[] = [];
      const quantities: number[] = [];

      HTMLprices.forEach((HTMLprice: Element) =>
        prices.push(Number(HTMLprice.innerHTML.split(' ')[1])),
      );

      HTMLquantities.forEach((HTMLquantity: Element) =>
        quantities.push(Number(HTMLquantity.innerHTML)),
      );

      const priceWithQuantity: number[] = [];

      prices.map((price: number, i: number) => {
        const realPrice: number = price * quantities[i];

        priceWithQuantity.push(realPrice);
      });

      const total: number = priceWithQuantity.reduce(
        (accumulator: number, price: number) => accumulator + price,
        0,
      );

      setTotalPrice(total);
    }
  };

  useEffect(() => {
    setPrice();
  }, []);

  return (
    <div className={`side_cart disable`} ref={SideCartDiv}>
      <div>
        <IoClose
          className="close_side_cart_icon"
          onClick={handleCloseSideCart}
        />
      </div>
      {props.cart == null ? (
        <h2 className="empty_cart">Seu carrinho está vazio.</h2>
      ) : (
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

            return (
              <div className="cart_product" key={id}>
                <LoadImage src={picture} alt={name} width={120} height={180} />

                <div className="cart_info">
                  <div className="top_informations">
                    <h3>{name}</h3>
                    <IoClose
                      className="remove_product"
                      onClick={async () => {
                        const token: string | null =
                          localStorage.getItem('token');

                        if (token)
                          await deleteOneFromUserCart(
                            id.toString(),
                            token,
                          ).then(() => window.location.reload());
                      }}
                    />
                  </div>
                  <div className="down_informations">
                    <big className="price_cart">R$ {price.toFixed(2)}</big>
                    <div className="cart_quantity_area">
                      <IoRemoveCircle
                        className="quantity_cart_btn"
                        onClick={async () => {
                          if (quantity != 1) {
                            setQuantity(quantity - 1);

                            const token: string | null =
                              localStorage.getItem('token');

                            if (token)
                              await updateCartQuantity(
                                `${id.toString()}:${quantity - 1}`,
                                token,
                              ).then(() => setPrice());
                          }
                        }}
                      />
                      <small className="quantity">{quantity}</small>
                      <IoAddCircle
                        className="quantity_cart_btn"
                        onClick={async () => {
                          setQuantity(quantity + 1);

                          const token: string | null =
                            localStorage.getItem('token');

                          if (token)
                            await updateCartQuantity(
                              `${id.toString()}:${quantity + 1}`,
                              token,
                            ).then(() => setPrice());
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="buy_products_area">
            <h2 className="cart_total_price">
              Preço total: R$ {totalPrice?.toFixed(2)}
            </h2>
            <button className="btn_buy_all_cart">
              <IoAdd className="buy_add_cart" /> Finalizar pedido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideCart;
