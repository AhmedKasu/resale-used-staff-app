import { SafeAreaView, StyleSheet } from 'react-native';

import Contants from 'expo-constants';

import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ListingsScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Contants.statusBarHeight,
  },
});
