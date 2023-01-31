import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
