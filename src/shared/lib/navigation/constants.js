/**
 * @typedef {import('@react-navigation/drawer').DrawerNavigationOptions} DrawerNavigationOptions
 * @typedef {import('@react-navigation/native-stack').NativeStackNavigationOptions} StackNavigationOptions
 */

export const screenNames = {
  Categories: 'Categories',
  Favorites: 'Favorites',
  Meals: 'Meals',
  MealDetails: 'MealDetails'
};

/**
 * Опции для экрана стека.
 * @type {StackNavigationOptions}
 */
export const stackScreenOptions = {
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
};

/**
 * Опции для экрана ящика.
 * @type {DrawerNavigationOptions}
 */
export const drawerScreenOptions = {
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
};
