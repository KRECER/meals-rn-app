import { View, Text, StyleSheet, Pressable, Image, Platform } from 'react-native';
import { toCapitalize } from '../../../shared/lib/texts/utils';

export const Card = ({ data }) => {
  return <View style={styles.root}>
    <Pressable>
        <Image style={styles.image} source={{ uri: data.imageUrl }} />
        <View style={styles.contentWrap}>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.detailsWrap}>
            <Text>{data.duration}m</Text>
            <Text>{toCapitalize(data.complexity)}</Text>
            <Text>{toCapitalize(data.affordability)}</Text>
          </View>
        </View>
    </Pressable>
  </View>;
};

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 8,
    overflow: Platform.OS === 'ios' ? 'visible' : 'hidden',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8
  },
  image: {
    height: 200
  },
  contentWrap: {
    padding: 15
  },
  title: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: '700'
  },
  detailsWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  }

});
