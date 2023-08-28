import { FlatList, StyleSheet } from 'react-native';
import { CategoryCard } from '../../entities/category';
import { useNavigation } from '@react-navigation/native';

export const List = ({ data }) => {
  const navigation = useNavigation();

  const renderItem = (data) => {
    return <CategoryCard data={data.item} onPress={() => navigation.navigate('Meals', { categoryId: data.item.id })}/>;
  };

  return <FlatList data={data} renderItem={renderItem} keyExtractor={(data) => data.id} style={styles.root} numColumns={2}/>;
};

const styles = StyleSheet.create({
  root: {
    // paddingHorizontal: 15,
  }
});
