import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';

import { CategoriesScreen, MealsScreen, FavoritesScreen, MealDetailsScreen } from '../screens';
import { screenNames, screenOptions } from '../shared/lib/navigation/constants';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={screenOptions.drawer}>
      <Drawer.Screen
        name='Drawer'
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
          ),
          drawerLabel: 'Categories',
          headerTitle: 'Categories'
        }}
      />
      <Drawer.Screen
        name={screenNames.Favorites}
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size, focused }) => (
            <MaterialIcons name={focused ? 'favorite' : 'favorite-outline'} color={color} size={size} />
          )
        }}
      />
    </Drawer.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions.stack}>
      <Stack.Screen
        name={screenNames.Categories}
        component={DrawerNavigator}
        options={{
          title: 'Categories',
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
