import { useQuery } from 'react-query';
import { categoriesApi } from '../../../shared/api';

export const useCategories = () => {
  return useQuery('categories', categoriesApi.get);
};
