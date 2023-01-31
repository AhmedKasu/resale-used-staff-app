import { View, Image, StyleSheet } from 'react-native';

import colors from '../config/colors';

import { MaterialIcons } from '@expo/vector-icons';

const ViewImageScreen = ({ image }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons
        style={styles.cancelIcon}
        name='cancel'
        size={35}
        color='white'
      />
      <MaterialIcons
        style={styles.deleteIcon}
        name='delete-outline'
        size={35}
        color='white'
      />
      <Image style={styles.image} source={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '70%',
  },
  cancelIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
});

export default ViewImageScreen;
