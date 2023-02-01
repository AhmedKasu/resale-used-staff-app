import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ListingDetailsScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
