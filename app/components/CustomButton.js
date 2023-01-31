import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

const CustomButton = ({ title, onPress, color = 'primary' }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 50,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontStyle: 'italic',

    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomButton;
