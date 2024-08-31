'use client';

import { useState, useEffect, useCallback } from 'react';
import api from '@/services/api';

const useAllProducts = async () => {
  const [products, setProducts] = useState<object>();

  const getProducts = useCallback(async () => {
    const res: any = (await api.get('/product/get/all')).data;
    if (res.products) {
      setProducts(res.products);
    }
  }, [setProducts]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return products;
};

export default useAllProducts;
