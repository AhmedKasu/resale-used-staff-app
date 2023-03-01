import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import CustomIcon from '../CustomIcon';
import CustomText from '../CustomText';

const CategoriesPickerItemComponent = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <CustomIcon name={item.icon} color={item.backgroundColor} size={80} />
        <CustomText style={styles.label}>{item.name}</CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
    margin: 2,
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});
export default CategoriesPickerItemComponent;
