import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDataFromAs = async (key) => {
  try {
    const serealizedValue = await AsyncStorage.getItem(key);
    const deserealizedValue = serealizedValue != null ? JSON.parse(serealizedValue) : null;
    return deserealizedValue;
  } catch (err) {}
};
