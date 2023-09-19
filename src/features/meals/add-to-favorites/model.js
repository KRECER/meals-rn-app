import { useEffect, useState } from 'react';
import { getDataFromAs } from '../../../shared/lib/async-storage/get-data';
import { setDataToAs } from '../../../shared/lib/async-storage/set-data';

export const addToFavoriteById = async (id) => {
  let ids = await getDataFromAs('favorites') || [];
  const isExistsId = ids?.includes(id);

  if (isExistsId) {
    ids = ids.filter((it) => it !== id);
    setDataToAs('favorites', ids);
  } else {
    ids.push(id);
    setDataToAs('favorites', ids);
  }

  return ids;
};

export const isCurrentIdInFavorites = async (id) => {
  try {
    const ids = await getDataFromAs('favorites') || [];
    const result = ids?.includes(id);
    return !!result;
  } catch (error) {}
};

export const useIsIdInFavorites = (id) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await isCurrentIdInFavorites(id);
      setIsActive(res);
    })();
  }, []);

  return {
    isActive,
    setIsActive
  };
};
