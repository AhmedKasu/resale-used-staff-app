import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';

import CustomText from '../CustomText';
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListItem = ({
  image,
  IconComponent,
  rightActions,
  title,
  subTitle,
  onPress,
}) => {
  return (
    <Swipeable renderRightActions={rightActions}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.itemContainer}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <CustomText style={styles.title} numberOfLines={1}>
              {title}
            </CustomText>
            {subTitle && (
              <CustomText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </CustomText>
            )}
          </View>
          <MaterialCommunityIcons
            name={'chevron-right'}
            color={colors.medium}
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
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
    flex: 1,
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
