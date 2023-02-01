import { SafeAreaView, StyleSheet } from 'react-native';

import Contants from 'expo-constants';

import MyAccountScreen from './app/screens/MyAcountScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MyAccountScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Contants.statusBarHeight,
  },
});
