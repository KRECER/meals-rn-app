import { mealModel } from '../../entities/meal/model';
import { MealList } from '../../widgets/meal-list';
import { useRoute } from '@react-navigation/native';

export const Screen = () => {
  const route = useRoute();
  console.log(route.params);
  const categoryId = route.params?.categoryId;
  const { data } = mealModel.hooks.useQuery();
  const filteredMeals = data?.filter((it) => it.categoryIds.includes(categoryId));

  return <MealList data={filteredMeals} />;
};
