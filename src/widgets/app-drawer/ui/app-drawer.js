import { StyleSheet, SafeAreaView } from 'react-native';
import { AppNavigation } from '../../navigation';

export default () => {
  return <SafeAreaView style={styles.root}>
      <AppNavigation />
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: '#ccad87'
  }
});
