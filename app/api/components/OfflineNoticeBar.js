import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import CustomText from '../../components/CustomText';
import colors from '../../config/colors';

const OfflineNoticeBar = () => {
  const netInfo = useNetInfo();
  return (
    <>
      {!netInfo.isInternetReachable && (
        <View style={styles.container}>
          <CustomText style={styles.text}>No internet connection</CustomText>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    marginTop: 70,
    height: 50,
    width: '100%',
  },
  text: {
    color: colors.white,
  },
});
export default OfflineNoticeBar;
