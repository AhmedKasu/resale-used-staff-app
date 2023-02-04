import { TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';

const HideKeyboard = ({ children }) => {
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HideKeyboard;
