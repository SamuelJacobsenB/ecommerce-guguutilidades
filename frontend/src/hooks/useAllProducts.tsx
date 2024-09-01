'use client';

import { useState, useEffect, useCallback } from 'react';
import api from '@/services/api';
import { Product } from '@/types/ProductType';

const useAllProducts = () => {
  const [products, setProducts] = useState<Product[]>();

  const getProducts = useCallback(async () => {
    const res: any = await api.get('/product/get/all');
    const resProducts: Product[] = res.data;

    setProducts(resProducts);
  }, [setProducts]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return products;
};

export default useAllProducts;
