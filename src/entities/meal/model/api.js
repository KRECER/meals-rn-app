import axios from 'axios';
import { API_URL } from '../../../shared/constants';

export const api = Object.freeze({
  get: async () => {
    const res = await axios.get(`${API_URL}/meals`);
    return res.data;
  }
});
