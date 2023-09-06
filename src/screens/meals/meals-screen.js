import { useNavigation, useRoute } from '@react-navigation/native';
import { mealsModel } from '../../entities/meal';
import { MealList } from '../../widgets/meal-list';
import { useLayoutEffect } from 'react';
import { categoryModel } from '../../entities/category';

export const Screen = () => {
  const { data: mealsData } = mealsModel.hooks.useAllQuery();
  const { data: categoriesData } = categoryModel.hooks.useQuery();
  const route = useRoute();
  const navigation = useNavigation();

  const categoryId = route.params?.categoryId;

  const filteredMeals = mealsData?.filter((it) => it.categoryIds.includes(categoryId));
  const categoryTitle = categoriesData?.find((it) => it.id === categoryId)?.title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle
    });
  }, [categoryTitle, navigation]);

  return <MealList data={filteredMeals} />;
};
