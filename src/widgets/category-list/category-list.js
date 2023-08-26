import { FlatList, StyleSheet } from 'react-native';
import { CategoryCard } from '../../entities/category';

export const CategoryList = ({ data }) => {
  const renderItem = (data) => {
    return <CategoryCard data={data.item} />;
  };

  return <FlatList data={data} renderItem={renderItem} keyExtractor={(data) => data.id} style={styles.root} numColumns={2}/>;
};

const styles = StyleSheet.create({
  root: {
    // paddingHorizontal: 15,
  }
});
