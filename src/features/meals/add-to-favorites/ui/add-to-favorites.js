import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { addToFavoriteById, useIsIdInFavorites } from '../model';
import { useAppContext } from '../../../../shared/lib/context/use-app-context';

export default ({ id }) => {
  const { isActive, setIsActive } = useIsIdInFavorites(id);
  const { setFavorites } = useAppContext();

  const handlePress = async () => {
    setIsActive((prev) => !prev);
    const updatedData = await addToFavoriteById(id);
    setFavorites(updatedData);
  };

  return <Pressable onPress={handlePress}>
    <Ionicons name={isActive ? 'heart' : 'heart-outline' } color='white' size={32}/>
  </Pressable>;
};
