'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { Product } from '@/types/ProductType';
import { Category } from '@/types/CategoryType';
import LoadImage from '@/components/others/LoadImage/LoadImage';
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
    <div className="product_info">
      <LoadImage src={picture} alt={name} width={460} height={600} />
      <h1>{name}</h1>
      <p>{description}</p>
      <big>{price}</big>
    </div>
  );
};

export default ProductInformations;
