import { View, Image, StyleSheet } from 'react-native';

import CustomText from './CustomText';
import colors from '../config/colors';

const ListItem = ({ image, title, subTitle }) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <CustomText style={styles.title}>{title}</CustomText>
        <CustomText style={styles.subTitle}>{subTitle}</CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  title: {
    fontWeight: '500',
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
