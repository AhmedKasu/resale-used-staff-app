import { View, StyleSheet } from 'react-native';

import ListingPostScreen from './app/screens/ListingPostScreen';

const messages = [
  {
    id: 1,
    sender: {
      name: 'Ahmed Kasu',
      image: require('./app/assets/Ahmed.jpg'),
    },
    message: 'Hi! is this still available?',
  },
  {
    id: 2,
    sender: {
      name: 'Beve Blasha',
      image: require('./app/assets/Ahmed.jpg'),
    },
    message: 'Hi! is this still available?',
  },
  {
    id: 3,
    sender: {
      name: 'Wayne Rooney',
      image: require('./app/assets/Ahmed.jpg'),
    },
    message:
      'Hi! I am intrested in this camera. Is it still available? sjnsdöjsödjsdökc sdökc sdöksd öskd sdök sdöks',
  },
];

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
