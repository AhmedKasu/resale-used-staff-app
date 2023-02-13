import { StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <CustomText style={styles.container}>{item.label}</CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, paddingVertical: 10 },
});
export default PickerItem;
