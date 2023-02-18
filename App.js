import { View, StyleSheet } from 'react-native';

import ListingPostScreen from './app/screens/ListingPostScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ListingPostScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
