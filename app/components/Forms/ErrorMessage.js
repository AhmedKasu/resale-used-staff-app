import { StyleSheet } from 'react-native';

import CustomText from '../CustomText';

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  return <CustomText style={styles.error}>{error}</CustomText>;
};

const styles = StyleSheet.create({
  error: {
    fontSize: 14,
    color: 'red',
  },
});

export default ErrorMessage;
