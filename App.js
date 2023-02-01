import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

import CardScreen from './app/screens/CardScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CardScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
