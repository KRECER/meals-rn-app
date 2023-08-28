import { View, Text } from 'react-native';

export const Card = ({ data }) => {
  return <View>
    <Text>{data.title}</Text>
  </View>;
};
