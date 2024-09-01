import axios from 'axios';
import process from '../../config';

const api = axios.create({
  baseURL: process.env.API_URL,
});

export default api;
