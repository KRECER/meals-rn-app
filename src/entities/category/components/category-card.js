import { Pressable, StyleSheet, Text, View, Platform } from 'react-native';

export const Card = ({ data }) => {
  return <View style={[styles.root, Platform.OS === 'android' && { backgroundColor: data.color }]}>
            <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => pressed ? [styles.pressable, { opacity: 0.5 }] : styles.pressable}>
                <View style={[styles.inner, Platform.OS === 'ios' && { backgroundColor: data.color }]}>
                    <Text style={styles.title}>{data.title}</Text>
                </View>
            </Pressable>
    </View>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 15,
    height: 200,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    borderRadius: 8,
    elevation: 4
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    shadowColor: '#000'
  },
  title: {
    fontSize: 18,
    fontWeight: '600'
  },
  pressable: {
    flex: 1
  }
});
