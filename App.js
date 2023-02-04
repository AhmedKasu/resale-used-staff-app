import { SafeAreaView, StyleSheet } from 'react-native';

import Contants from 'expo-constants';

import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Contants.statusBarHeight,
  },
});
