import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';

import { CategoriesScreen, MealsScreen, FavoritesScreen } from '../screens';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerGroup = () => {
  return <Drawer.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#000'
    },
    headerTintColor: '#fff',
    sceneContainerStyle: {
      backgroundColor: '#F2D1A8'
    },
    drawerContentStyle: {
      backgroundColor: '#ccad87'
    },
    drawerActiveBackgroundColor: '#F2D1A8',
    drawerActiveTintColor: '#7a6143',
    drawerInactiveTintColor: '#56432b'
  }}>
    <Drawer.Screen name='Drawer' component={CategoriesScreen} options={{
      drawerIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
    }} />
    <Drawer.Screen name='Favorites' component={FavoritesScreen} options={{
      drawerIcon: ({ color, size, focused }) => <MaterialIcons name={focused ? 'favorite' : 'favorite-outline'} color={color} size={size} />
    }}/>
  </Drawer.Navigator>;
};

const StackGroup = () => {
  return <Stack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#000'
    },
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
      <Stack.Screen name='Categories' component={DrawerGroup} options={{
        title: 'Categories',
        headerShown: false
      }} />
      <Stack.Screen name='Meals' component={MealsScreen} />
  </Stack.Navigator>;
};

export const Routing = () => {
  return <NavigationContainer>
    <StackGroup />
  </NavigationContainer>;
};
