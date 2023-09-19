import { screenNames } from '../../shared/lib/navigation/constants';

export const items = [
  {
    name: screenNames.Categories,
    icon: {
      default: 'home-outline',
      focused: 'home',
      libraryName: 'ion'
    }
  },
  {
    name: screenNames.Favorites,
    icon: {
      default: 'favorite-outline',
      focused: 'favorite',
      libraryName: 'material'
    }
  }
];
