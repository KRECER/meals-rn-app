import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriesScreen, MealsScreen } from '../screens';

const Stack = createNativeStackNavigator();

export const Routing = () => {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? 'transparent' : '#000'
      },
      headerTransparent: true,
      headerBlurEffect: 'systemChromeMaterialDark',
      contentStyle: {
        backgroundColor: '#F2D1A8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: '700'
      },
      headerBackTitle: 'Back'
    }} >
        <Stack.Screen name='Categories' component={CategoriesScreen} options={{
          title: 'Categories',
          headerLargeTitle: true,
          headerLargeTitleStyle: {
            fontSize: 45,
            fontWeight: '800',
            color: '#fff'
          }
        }} />
        <Stack.Screen name='Meals' component={MealsScreen} />
    </Stack.Navigator>
  </NavigationContainer>;
};
