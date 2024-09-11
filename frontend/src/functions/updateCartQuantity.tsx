import api from '@/services/api';

const updateCartQuantity = async (cart: string, token: string) => {
  const res = await api.patch(
    `/user/update/cart/quantity`,
    { cart },
    {
      headers: { Authorization: token },
    },
  );

  return res.data;
};

export default updateCartQuantity;
