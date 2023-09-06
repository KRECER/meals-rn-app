import { useQuery as useReactQuery } from 'react-query';
import { categoriesApi } from '../api';

export const useQuery = () => {
  return useReactQuery('categories', categoriesApi.getAll);
};
