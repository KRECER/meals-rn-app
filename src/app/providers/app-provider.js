import { useState, useEffect } from 'react';
import { getDataFromAs } from '../../shared/lib/async-storage/get-data';
import { AppContext } from '../../shared/lib/context/app-context';

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    (async () => {
      const savedFavorites = await getDataFromAs('favorites');
      setFavorites(savedFavorites || 0);
    })();
  }, []);

  return <AppContext.Provider value={{ favorites, setFavorites }}>
        {children}
    </AppContext.Provider>;
};
