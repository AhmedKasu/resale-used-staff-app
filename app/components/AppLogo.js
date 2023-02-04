import { Image, StyleSheet } from 'react-native';

const AppLogo = () => {
  return (
    <Image style={styles.logo} source={require('../assets/logo-red.png')} />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
});

export default AppLogo;
