import { View, StyleSheet, TouchableHighlight } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import CustomText from './CustomText';
import colors from '../config/colors';

const ListIcon = ({ name, description, onPress, color = 'primary' }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.iconWrapper, { backgroundColor: colors[color] }]}>
          <MaterialIcons name={name} size={24} color={'white'} />
        </View>
        <View>
          <CustomText>{description}</CustomText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
});
export default ListIcon;
