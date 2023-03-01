import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Progress from 'react-native-progress';

import colors from '../config/colors';

const UploadScreen = ({ progress = 0, visibility = false, onDone }) => {
  if (!progress) return null;

  return (
    <Modal visible={visibility} animationType='slide'>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            animated
            color={colors.secondary}
            height={10}
            progress={progress}
            width={250}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            style={{ width: 150 }}
            source={require('../assets/animations/done.json')}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
export default UploadScreen;
