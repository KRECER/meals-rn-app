import { useQuery } from 'react-query';
import { mealsApi } from '../api';

export const useAllQuery = () => {
  return useQuery('meals', mealsApi.getAll);
};

export const useByIdQuery = (id) => {
  return useQuery(['meals', id], () => mealsApi.getById(id));
};
