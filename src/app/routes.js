import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CategoriesScreen, MealsScreen } from '../screens';

const Stack = createNativeStackNavigator();

export const Routing = () => {
  return <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Categories' component={CategoriesScreen} />
        <Stack.Screen name='Meals' component={MealsScreen} />
    </Stack.Navigator>
  </NavigationContainer>;
};
