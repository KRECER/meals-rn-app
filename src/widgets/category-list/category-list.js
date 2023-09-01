import { FlatList } from 'react-native';
import { CategoryCard, categoryModel } from '../../entities/category';
import { useNavigation } from '@react-navigation/native';

export const List = () => {
  const navigation = useNavigation();
  const { data } = categoryModel.hooks.useQuery();

  const renderItem = (data) => {
    return <CategoryCard data={data.item} onPress={() => navigation.navigate('Meals', { categoryId: data.item.id })}/>;
  };

  return <FlatList data={data} renderItem={renderItem} keyExtractor={(data) => data.id} numColumns={2}/>;
};
