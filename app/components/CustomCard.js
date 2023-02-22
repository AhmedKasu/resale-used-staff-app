import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import CustomText from './CustomText';
import colors from '../config/colors';

const CustomCard = ({ title, subTitle, image, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.details}>
          <CustomText style={styles.title}>{title}</CustomText>
          <CustomText style={styles.subTitle}>{subTitle} </CustomText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default CustomCard;
