import api from '@/services/api';

const getUserById = async (token: string, id: number) => {
  const res: any = await api.get(`/user/get/${id}`, {
    headers: { Authorization: token },
  });

  return res.data;
};

export default getUserById;
