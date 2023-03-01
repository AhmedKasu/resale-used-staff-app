import { TextInput, StyleSheet, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import colors from '../../config/colors';
import defaultStyles from '../../config/styles';

const CustomTextInput = ({ icon, currency, width = '100%', ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialIcons
          style={styles.icon}
          name={icon}
          size={20}
          color={colors.medium}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={[styles.textInput, !currency ? { flex: 1 } : { marginLeft: 5 }]}
        {...otherProps}
      />
      {currency && (
        <MaterialIcons name={currency} size={20} color={colors.medium} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    ...defaultStyles.text,
  },
});

export default CustomTextInput;
