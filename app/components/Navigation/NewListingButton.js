import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name='plus-circle'
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    bottom: 20,
    borderColor: colors.white,
    borderWidth: 10,
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 40,
    height: 80,
    width: 80,
  },
});
export default NewListingButton;
