import { useHeaderHeight } from '@react-navigation/elements';
import { FlatList, Platform } from 'react-native';
import { MealCard } from '../../entities/meal';

export const List = ({ data }) => {
  const headerHeight = useHeaderHeight();

  const renderMealItem = (data) => {
    return <MealCard data={data.item} />;
  };

  return <FlatList style={{ marginTop: Platform.OS === 'ios' ? headerHeight - 6 : headerHeight }} data={data} keyExtractor={(data) => data.id} renderItem={renderMealItem} />;
};
