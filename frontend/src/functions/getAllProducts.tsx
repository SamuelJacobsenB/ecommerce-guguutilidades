import api from '@/services/api';
import { Product } from '@/types/ProductType';

const getAllProducts = async () => {
  const res: any = await api.get('/product/get/all');
  const resProducts: Product[] = res.data;
  return resProducts;
};

export default getAllProducts;
