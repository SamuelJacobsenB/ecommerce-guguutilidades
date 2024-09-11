import api from '@/services/api';

const deleteOneFromUserCart = async (cart: string, token: string) => {
  const res = await api.patch(
    `/user/remove/cart`,
    { cart },
    {
      headers: { Authorization: token },
    },
  );

  return res.data;
};

export default deleteOneFromUserCart;
