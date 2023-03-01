import React from 'react';
import { View, StyleSheet } from 'react-native';

import CustomButton from '../../components/CustomButton';
import CustomText from '../../components/CustomText';

const Reload = ({ visible, onPress }) => {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <CustomText> Error connecting to server!</CustomText>
        <CustomButton
          color='secondary'
          title='Reload'
          onPress={onPress}
          width='50%'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 50,
  },
  details: {
    alignItems: 'center',
  },
});
export default Reload;
