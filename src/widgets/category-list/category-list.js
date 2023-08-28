import { FlatList } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { CategoryCard, categoryModel } from '../../entities/category';
import { useNavigation } from '@react-navigation/native';

export const List = () => {
  const navigation = useNavigation();
  const { data } = categoryModel.hooks.useQuery();
  const headerHeight = useHeaderHeight();

  const renderItem = (data) => {
    return <CategoryCard data={data.item} onPress={() => navigation.navigate('Meals', { categoryId: data.item.id })}/>;
  };

  return <FlatList style={{ marginTop: headerHeight - 5 }} contentInsetAdjustmentBehavior="automatic" data={data} renderItem={renderItem} keyExtractor={(data) => data.id} numColumns={2}/>;
};
