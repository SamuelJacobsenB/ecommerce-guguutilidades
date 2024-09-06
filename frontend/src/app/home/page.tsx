'use client';

import { useState, useEffect, useCallback } from 'react';
import HomeLayout from '@/components/layout/HomeLayout';
import getAllProducts from '@/functions/getAllProducts';
import Filter from '@/components/others/Filter/Filter';
import LoadImage from '@/components/others/LoadImage/LoadImage';
import { Product } from '@/types/ProductType';
import './page.css';

const Home = () => {
  const [fixedProducts, setFixedProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = useCallback(async () => {
    const allProducts: Product[] | undefined = await getAllProducts();
    if (allProducts) {
      setFixedProducts(allProducts);
      setProducts(allProducts);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="home">
      <HomeLayout />
      <h1 className="home_title">Seja bem vindo(a)</h1>

      <div className="products">
        <Filter setProducts={setProducts} fixedProducts={fixedProducts} />
        <div className="product_list">
          {products.map((product: Product) => {
            const { id, picture, name, price } = product;

            return (
              <div className="home_product" key={Number(id)}>
                <LoadImage src={picture} alt={name} width={180} height={260} />
                <h3 className="product_name">{name}</h3>
                <big className="product_price">R$ {price.toFixed(2)}</big>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
