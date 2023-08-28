import { useQuery as useReactQuery } from 'react-query';
import { categoriesApi } from '../../../shared/api';

export const useQuery = () => {
  return useReactQuery('categories', categoriesApi.get);
};
