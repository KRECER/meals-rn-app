import { FlatList } from 'react-native-gesture-handler';
import { useAppContext } from '../../../shared/lib/context/use-app-context';
import { MealCard, mealsModel } from '../../../entities/meal';
import { navigateToMealDetails } from '../../../entities/meal/model/handlers';
import { useNavigation } from '@react-navigation/native';

export default () => {
  const { favorites } = useAppContext();
  const { data: mealsData } = mealsModel.hooks.useAllQuery();
  const filteredMeals = mealsData?.filter((it) => favorites?.includes(it.id));
  const navigation = useNavigation();

  const renderFavoriteItem = ({ item }) => {
    return <MealCard onPress={navigateToMealDetails.bind(null, navigation, item.id)} data={item} />;
  };

  return <FlatList data={filteredMeals} renderItem={renderFavoriteItem} keyExtractor={(it) => it.id} />;
};
