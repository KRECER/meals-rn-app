import AsyncStorage from '@react-native-async-storage/async-storage';

export const setDataToAs = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {

  }
};
