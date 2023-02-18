import { StyleSheet } from 'react-native';

import CustomText from '../CustomText';

const ErrorMessage = ({ error, touched }) => {
  if (!touched || !error) return null;

  return <CustomText style={styles.error}>{error}</CustomText>;
};

const styles = StyleSheet.create({
  error: {
    fontSize: 14,
    color: 'red',
  },
});

export default ErrorMessage;
