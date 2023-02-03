import { SafeAreaView, StyleSheet } from 'react-native';

import Contants from 'expo-constants';

import CustomTextInput from './app/components/customTextInput';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomTextInput icon={'email'} placeholder={'Email'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Contants.statusBarHeight,
  },
});
