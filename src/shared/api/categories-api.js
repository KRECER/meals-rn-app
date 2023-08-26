import axios from 'axios';
import { API_URL } from '../constants';

export const categoriesApi = Object.freeze({
  get: async () => {
    const res = await axios.get(`${API_URL}/categories`);
    return res.data;
  }
});
