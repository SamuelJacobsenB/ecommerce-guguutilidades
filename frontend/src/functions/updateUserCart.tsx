import api from '@/services/api';

const updateUserCart = async (cart: string, token: string) => {
  const res = await api.patch(
    `/user/update/cart`,
    { cart },
    {
      headers: { Authorization: token },
    },
  );

  return res.data;
};

export default updateUserCart;
