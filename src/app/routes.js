import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CategoriesScreen, MealsScreen, FavoritesScreen, MealDetailsScreen } from '../screens';
import { drawerScreenOptions, screenNames, stackScreenOptions } from '../shared/lib/navigation/constants';
import { AppDrawer } from '../widgets/app-drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={drawerScreenOptions} drawerContent={props => <AppDrawer {...props} />}>
      <Drawer.Screen
        name={screenNames.Categories}
        component={CategoriesScreen}
      />

      <Drawer.Screen
        name={screenNames.Favorites}
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={stackScreenOptions}>
      <Stack.Screen
        name={screenNames.Categories + 'Stack'}
        component={DrawerNavigator}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name={screenNames.Meals} component={MealsScreen} />
      <Stack.Screen name={screenNames.MealDetails} component={MealDetailsScreen} />
    </Stack.Navigator>
  );
};

export const Routing = () => {
  return (
      <StackNavigator />
  );
};
