import { StyleSheet, Text, View } from 'react-native';

export default ({ data, containerStyle }) => {
  return <View style={[styles.root, containerStyle]}>
    <Text style={styles.item}>{data?.duration} m</Text>
    <Text style={styles.item}>{data?.complexity}</Text>
    <Text style={styles.item}>{data?.affordability}</Text>
  </View>;
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    gap: 15
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#000',
    color: '#fff',
    textTransform: 'uppercase'
  }
});
