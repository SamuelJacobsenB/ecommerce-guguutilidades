'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { Product } from '@/types/ProductType';
import { Category } from '@/types/CategoryType';
import LoadImage from '@/components/others/LoadImage/LoadImage';
import { IoChevronBack } from 'react-icons/io5';
import { FaCartPlus } from 'react-icons/fa';
import Link from 'next/link';
import getProductById from '@/functions/getProductById';
import './page.css';

const ProductInformations = () => {
  const params = useParams();

  const [picture, setPicture] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>();
  const [category, setCategory] = useState<Category>();

  const getProduct = useCallback(async () => {
    if (typeof params.id == 'string') {
      const product: Product = await getProductById(params.id);

      setPicture(product.picture);
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setCategory(product.category);
    }
  }, []);

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
          <LoadImage src={picture} alt={name} width={420} height={560} />
        </div>
        <div className="product_info_box">
          <h1>{name}</h1>
          <p>{description}</p>
          <big>R$ {price}</big>
          <small>Categoria: {category}</small>
        </div>
      </div>
      <div className="add_to_cart">
        <FaCartPlus className="add_to_cart_icon" /> Adicionar ao carrinho
      </div>
    </div>
  );
};

export default ProductInformations;
