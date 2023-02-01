import { View, StyleSheet } from 'react-native';

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
      {listings.map((list) => (
        <CustomCard
          key={list.id}
          image={list.image}
          title={list.title}
          subTitle={`$${list.price}`}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.smokeWhite,
    padding: 17,
  },
});

export default ListingsScreen;
