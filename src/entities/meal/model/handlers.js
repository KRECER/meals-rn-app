import { screenNames } from '../../../shared/lib/navigation/constants';

export const navigateToMealDetails = (navigation, mealId) => {
  navigation.navigate(screenNames.MealDetails, { mealId });
};
