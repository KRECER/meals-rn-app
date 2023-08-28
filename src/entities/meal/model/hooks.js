import { useQuery as useReactQuery } from 'react-query';
import { api } from './api';

export const useQuery = () => {
  return useReactQuery('meals', api.get);
};
