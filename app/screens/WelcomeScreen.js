import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

import CustomButton from '../components/CustomButton';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logo-red.png')}></Image>
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
  logoContainer: {
    position: 'absolute',
    top: 80,
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default WelcomeScreen;
