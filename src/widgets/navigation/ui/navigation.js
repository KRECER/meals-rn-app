import { useState } from 'react';
import { FlatList, StyleSheet, Text, Pressable, View } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { screenNames } from '../../../shared/lib/navigation/constants';
import { items } from '../model';
import { COLORS } from '../../../shared/lib/styles/colors';
import { useAppContext } from '../../../shared/lib/context/use-app-context';
import { useNavigation } from '@react-navigation/native';

export default () => {
  const [selectedItemName, setSelectedItemName] = useState(screenNames.Categories);
  const navigation = useNavigation();
  const { favorites } = useAppContext();

  const handleItemPress = (name) => {
    setSelectedItemName(name);
    navigation.navigate(name);
  };

  const renderIcon = (iconName, libraryName, iconColor) => {
    switch (libraryName) {
      case 'ion':
        return <Ionicons name={iconName} size={24} color={iconColor}/>;
      case 'material':
        return <MaterialIcons name={iconName} size={24} color={iconColor}/>;
      default: return null;
    }
  };

  const renderItem = ({ item }) => {
    const isFocused = item.name === selectedItemName;
    const iconName = isFocused ? item.icon.focused : item.icon.default;
    const rootStyles = [styles.item, isFocused && styles.activeItem];
    const titleStyles = [styles.itemTitle, isFocused && styles.activeItemTitle];
    const iconColor = isFocused ? COLORS.Primary[900] : COLORS.Primary[900];

    return <Pressable style={rootStyles} onPress={handleItemPress.bind(null, item.name)}>
        <View style={styles.itemLeftWrap}>
          {renderIcon(iconName, item.icon.libraryName, iconColor)}
          <Text style={titleStyles}>{item.name}</Text>
        </View>
        {item.name === screenNames.Favorites && <View style={styles.favoriteCount}>
            <Text style={styles.favoriteCountText}>{favorites?.length}</Text>
          </View>}
    </Pressable>;
  };

  return <FlatList style={styles.root} data={items} renderItem={renderItem} keyExtractor={(it) => it.name} />;
};

const styles = StyleSheet.create({
  root: {
    padding: 15
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    paddingHorizontal: 20,
    gap: 20,
    borderRadius: 10
  },
  itemLeftWrap: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20
  },
  itemIcon: {

  },
  activeItem: {
    backgroundColor: COLORS.Primary[400]
  },
  itemTitle: {
    color: COLORS.Primary[900]
  },
  activeItemTitle: {
    color: COLORS.Primary[900]
  },
  favoriteCount: {
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    backgroundColor: COLORS.Black,
    color: COLORS.White
  },
  favoriteCountText: {
    color: COLORS.White
  }
});
