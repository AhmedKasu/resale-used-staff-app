import React from 'react';
import { View, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';

const ActivityIndicator = ({ visible }) => {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        source={require('../assets/animations/loader.json')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    position: 'absolute',
    width: '100%',
    opacity: 0.6,
    zIndex: 5,
  },
});

export default ActivityIndicator;
