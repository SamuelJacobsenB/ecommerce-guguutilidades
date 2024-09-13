import api from '@/services/api';
import { Product } from '@/types/ProductType';

const updateProduct = async (product: Product, id: string, token: string) => {
  const res = await api.patch(`/product/update/${id}`, product, {
    headers: { Authorization: token },
  });

  return res.data;
};

export default updateProduct;
