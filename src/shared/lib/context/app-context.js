import { createContext } from 'react';

const defaultContextValues = {
  favorites: [],
  setFavorites: () => undefined
};

export const AppContext = createContext(defaultContextValues);
