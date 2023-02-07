import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

import CustomButton from '../components/CustomButton';
import AppLogo from '../components/AppLogo';
import defaultStyles from '../config/styles';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/welcomeScreen.jpg')}>
      <View style={defaultStyles.appLogoContainer}>
        <AppLogo />
        <Text style={styles.text}>sell & buy quality stuff </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title='Login'
          onPress={() => console.log('logIn')}
          color={'primary'}
        />
        <CustomButton
          title='Register'
          onPress={() => console.log('register')}
          color={'secondary'}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    padding: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default WelcomeScreen;
