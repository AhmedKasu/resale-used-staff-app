import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const SafeAreaScreen = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default SafeAreaScreen;
