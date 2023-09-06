import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { mealsModel } from '../../entities/meal';

export const MealDetailsScreen = () => {
  const route = useRoute();
  const { mealId } = route.params;
  const { data } = mealsModel.hooks.useByIdQuery(mealId);

  return <View>
        <Text>{data?.title}</Text>
    </View>;
};
