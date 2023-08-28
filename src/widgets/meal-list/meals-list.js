import { FlatList } from 'react-native';
import { MealCard } from '../../entities/meal';

export const List = ({ data }) => {
  const renderItem = (data) => {
    return <MealCard data={data.item} />;
  };

  return <FlatList data={data} keyExtractor={(data) => data.id} renderItem={renderItem} />;
};
