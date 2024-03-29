import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import CustomText from '../components/CustomText';
import ListItem from '../components/Lists/ListItem';
import SafeAreaScreen from './SafeAreScreen';

import colors from '../config/colors';

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  return (
    <SafeAreaScreen>
      <View>
        <Image
          style={styles.image}
          tint='light'
          preview={{ uri: listing.images[0].thumbnailUrl }}
          uri={listing.images[0].url}
        />
        <View style={styles.detailsContainer}>
          <CustomText style={styles.description}>{listing.title}</CustomText>
          <CustomText style={styles.price}>{`€ ${listing.price}`}</CustomText>
        </View>
        <View>
          <ListItem
            image={require('../assets/Ahmed.jpg')}
            title='Ahmed Kasu'
            subTitle='5 Listings'
          />
        </View>
      </View>
    </SafeAreaScreen>
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
