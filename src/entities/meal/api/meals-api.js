import axios from 'axios';
import { API_URL } from '../../../shared/constants';

export const mealsApi = Object.freeze({
  getAll: async () => {
    const res = await axios.get(`${API_URL}/meals`);
    return res.data;
  },
  getById: async (id) => {
    const res = await axios.get(`${API_URL}/meals/${id}`);
    return res.data;
  }
});
