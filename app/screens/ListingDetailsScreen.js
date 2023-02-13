import { View, Image, StyleSheet } from 'react-native';

import CustomText from '../components/CustomText';
import ListItem from '../components/Lists/ListItem';

import colors from '../config/colors';

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/watch.jpg')} />
      <View style={styles.detailsContainer}>
        <CustomText style={styles.description}>
          A Casio watch in excellent condition
        </CustomText>
        <CustomText style={styles.price}>$350</CustomText>
      </View>
      <View>
        <ListItem
          image={require('../assets/Ahmed.jpg')}
          title='Ahmed Kasu'
          subTitle='5 Listings'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  description: {
    fontSize: 23,
    fontWeight: '600',
  },
  detailsContainer: {
    padding: 20,
    marginVertical: 10,
  },
  price: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 21,
    marginVertical: 10,
  },
});

export default ListingDetailsScreen;
