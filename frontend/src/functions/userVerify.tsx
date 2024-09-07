import api from '@/services/api';

const userVerify = async (token: string) => {
  const res = await api.post(
    `/user/verify`,
    {},
    {
      headers: { Authorization: token },
    },
  );

  return res.data;
};

export default userVerify;
