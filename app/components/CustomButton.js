import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

const CustomButton = ({
  color = 'primary',
  disabled = false,
  title,
  onPress,
  width = '100%',
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[color], opacity: disabled ? 0.5 : 1 },
        { width },
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
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
