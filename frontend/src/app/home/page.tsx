'use client';

import { useState, useEffect, useCallback } from 'react';
import getAllProducts from '@/functions/getAllProducts';
import { IoFilter } from 'react-icons/io5';
import './page.css';
import LoadImage from '@/components/others/LoadImage/LoadImage';
import { Product } from '@/types/ProductType';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = useCallback(async () => {
    const allProducts: Product[] | undefined = await getAllProducts();
    if (allProducts) setProducts(allProducts);
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="home">
      <h1 className="home_title">Seja bem vindo(a)</h1>
      <div className="products">
        <div className="filter">
          <IoFilter className="filter_home_icon" /> Filtrar produtos
        </div>
        <div className="product_list">
          {products.map((product: Product) => {
            const { id, picture, name, price } = product;

            return (
              <div className="home_product" key={Number(id)}>
                <LoadImage src={picture} alt={name} width={300} height={420} />
                <h3 className="product_name">{name}</h3>
                <small className="product_price">R$ {price.toFixed(2)}</small>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
