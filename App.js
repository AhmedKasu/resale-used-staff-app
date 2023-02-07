import { SafeAreaView, StyleSheet } from 'react-native';

import Contants from 'expo-constants';

import RegisterScreen from './app/screens/RegisterScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RegisterScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Contants.statusBarHeight,
  },
});
