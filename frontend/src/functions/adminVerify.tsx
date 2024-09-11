import api from '@/services/api';

const adminVerify = async (token: string) => {
  const res = await api.post(
    `/user/verify/admin`,
    {},
    {
      headers: { Authorization: token },
    },
  );

  return res.data;
};

export default adminVerify;
