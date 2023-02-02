import { View, StyleSheet, FlatList } from 'react-native';

import CustomCard from '../components/CustomCard';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Casio Watch in excellent condition',
    price: 380,
    image: require('../assets/watch.jpg'),
  },
  {
    id: 2,
    title: 'Antique chair in good condition',
    price: 280,
    image: require('../assets/chair.jpg'),
  },
  {
    id: 3,
    title: 'Iphone X, used like new',
    price: 500,
    image: require('../assets/iphoneX.jpg'),
  },
];

const ListingsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <CustomCard
            image={item.image}
            title={item.title}
            subTitle={`$${item.price}`}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    paddingHorizontal: 20,
  },
});

export default ListingsScreen;
