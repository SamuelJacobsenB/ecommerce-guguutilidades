import api from '@/services/api';

const deleteProduct = async (id: number, token: string) => {
  const res = await api.delete(`/product/delete/${id}`, {
    headers: { Authorization: token },
  });

  return res.data;
};

export default deleteProduct;
