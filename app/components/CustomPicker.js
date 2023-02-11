import { useState } from 'react';
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import CustomText from './CustomText';
import SafeAreaScreen from '../screens/SafeAreScreen';
import PickerItem from './PickerItem';

const CustomPicker = ({
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
}) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisibility(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={20}
              color={colors.medium}
            />
          )}
          {selectedItem ? (
            <CustomText style={styles.text}>{selectedItem.label}</CustomText>
          ) : (
            <CustomText style={styles.placeholder}>{placeholder}</CustomText>
          )}
          <MaterialCommunityIcons
            name={'chevron-down'}
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visibility} animationType='slide'>
        <SafeAreaScreen>
          <FlatList
            data={items}
            keyExtractor={(items) => items.id.toString()}
            renderItem={({ item }) => (
              <PickerItem
                onPress={() => {
                  onSelectItem(item), setVisibility(false);
                }}
                item={item.label}
              />
            )}
          />
          <View style={styles.button}>
            <Button onPress={() => setVisibility(false)} title='cancel' />
          </View>
        </SafeAreaScreen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  button: {
    position: 'absolute',
    right: 40,
    top: 60,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
    color: colors.medium,
  },
});

export default CustomPicker;
