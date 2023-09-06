import axios from 'axios';
import { API_URL } from '../../../shared/constants';

export const categoriesApi = Object.freeze({
  getAll: async () => {
    const res = await axios.get(`${API_URL}/categories`);
    return res.data;
  }
});
