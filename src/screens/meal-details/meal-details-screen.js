import { Image, StyleSheet, View, Text, Pressable } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { MealDetails, mealsModel } from '../../entities/meal';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../shared/ui';
import { useLayoutEffect } from 'react';
import { useModalContext } from '../../shared/lib/modal/modal.hook';

export const MealDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { mealId } = route.params;
  const { data } = mealsModel.hooks.useByIdQuery(mealId);
  const { setModalData } = useModalContext();

  const handleButton = (type) => {
    setModalData({
      isVisible: true,
      type,
      data: { mealId, title: type }
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Pressable>
          <Ionicons name='heart-outline' color='white' size={32}/>
        </Pressable>;
      }
    });
  }, [navigation]);

  return <View>
            <Image style={styles.image} source={{ uri: data?.imageUrl }} />
        <View style={styles.contentWrap}>
          <Text style={styles.title}>{data?.title}</Text>
          <MealDetails data={data} containerStyle={ styles.detailsContainer } />
          <View style={styles.buttonsWrap}>
            <Button containerStyle={styles.button} onPress={() => handleButton('ingredients')}>Ingredients</Button>
            <Button containerStyle={styles.button} variant='secondary' onPress={() => handleButton('steps')}>Steps</Button>
          </View>
        </View>
  </View>;
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  contentWrap: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    marginBottom: 10

  },
  buttonsWrap: {
    flexWrap: 'wrap',
    gap: 10
  },
  detailsContainer: {
    marginBottom: 30
  },
  button: {
    width: '100%'
  }
});
