import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';

import CustomText from './CustomText';
import colors from '../config/colors';

const ListItem = ({ image, IconComponent, title, subTitle, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.itemContainer}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <CustomText style={styles.title}>{title}</CustomText>
          {subTitle && (
            <CustomText style={styles.subTitle}>{subTitle}</CustomText>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    justifyContent: 'center',
    marginLeft: 15,
  },
  title: {
    fontWeight: '500',
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
