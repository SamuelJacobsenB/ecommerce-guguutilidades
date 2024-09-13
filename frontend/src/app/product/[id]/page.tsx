'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Product } from '@/types/ProductType';
import { Category } from '@/types/CategoryType';
import LoadImage from '@/components/others/LoadImage/LoadImage';
import { IoChevronBack } from 'react-icons/io5';
import { FaCartPlus } from 'react-icons/fa';
import Link from 'next/link';
import getProductById from '@/functions/getProductById';
import userVerify from '@/functions/userVerify';
import updateUserCart from '@/functions/updateUserCart';
import './page.css';

const ProductInformations = () => {
  const router = useRouter();
  const params = useParams();

  const [id, setId] = useState<number>();
  const [picture, setPicture] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>();
  const [category, setCategory] = useState<string>();

  const getProduct = useCallback(async () => {
    if (typeof params.id == 'string') {
      const product: Product = await getProductById(params.id);

      setId(product.id);
      setPicture(product.picture);
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setCategory(product.category);
    }
  }, []);

  const addToCart = async () => {
    const token: string | null = localStorage.getItem('token');

    if (token) {
      const verify: any = await userVerify(token);
      if (verify.error_msg) {
        localStorage.removeItem('token');
        router.push('/login');
      } else {
        if (id) {
          await updateUserCart(id.toString(), token)
            .then((res: any) => {
              if (res.error_msg) {
                console.log(res.error_msg);
              } else {
                router.push('/home');
              }
            })
            .catch(() => {
              console.log('Error');
            });
        }
      }
    } else {
      router.push('/login');
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="product_info_area">
      <Link href={'/home'}>
        <div className="fixed_back">
          <IoChevronBack className="product_back_icon" /> Voltar à página
          principal
        </div>
      </Link>
      <div className="product_info">
        <div className="product_image">
          <LoadImage src={picture} alt={name} width={400} height={540} />
        </div>
        <div className="product_info_box">
          <h1>{name}</h1>
          <p>{description}</p>
          <big>R$ {price}</big>
          <small>Categoria: {category}</small>
          <button className="add_to_cart_button" onClick={addToCart}>
            <FaCartPlus className="add_to_cart_icon" /> Adicionar ao carrinho
          </button>
        </div>
      </div>
      <div className="add_to_cart" onClick={addToCart}>
        <FaCartPlus className="add_to_cart_icon" /> Adicionar ao carrinho
      </div>
    </div>
  );
};

export default ProductInformations;
