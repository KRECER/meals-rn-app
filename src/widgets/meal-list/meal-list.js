import { FlatList } from 'react-native';
import { MealCard } from '../../entities/meal';
import { navigateToMealDetails } from '../../entities/meal/model/handlers';
import { useNavigation } from '@react-navigation/native';

export const List = ({ data }) => {
  const navigation = useNavigation();

  const renderMealItem = (data) => {
    return <MealCard
      data={data.item}
      onPress={() => navigateToMealDetails(navigation, data.item.id)}
    />;
  };

  return <FlatList data={data} keyExtractor={(data) => data.id} renderItem={renderMealItem} />;
};
