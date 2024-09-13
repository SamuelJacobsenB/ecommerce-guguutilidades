import api from '@/services/api';
import { Product } from '@/types/ProductType';

const createProduct = async (product: Product, token: string) => {
  const res = await api.post(`/product/create`, product, {
    headers: { Authorization: token },
  });

  return res.data;
};

export default createProduct;
