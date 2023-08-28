import { mealsModel } from '../../entities/meal';
import { MealList } from '../../widgets/meal-list';
import { useRoute } from '@react-navigation/native';

export const Screen = () => {
  const route = useRoute();
  const categoryId = route.params?.categoryId;
  const { data } = mealsModel.hooks.useQuery();
  const filteredMeals = data?.filter((it) => it.categoryIds.includes(categoryId));

  return <MealList data={filteredMeals} />;
};
