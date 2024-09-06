import api from '@/services/api';
import { Product } from '@/types/ProductType';

const getProductById = async (id: string) => {
  const res: any = await api.get(`/product/get/${id}`);
  const resProduct: Product = res.data;
  return resProduct;
};

export default getProductById;
