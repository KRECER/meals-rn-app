import { useContext } from 'react';
import { AppContext } from './app-context';

export const useAppContext = () => {
  return useContext(AppContext);
};
