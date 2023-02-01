import { View, StyleSheet } from 'react-native';

import CustomCard from '../components/CustomCard';
import colors from '../config/colors';

const CardScreen = () => {
  return (
    <View style={styles.container}>
      <CustomCard
        image={require('../assets/watch.jpg')}
        title={'Casio Watch in excellent condition'}
        subTitle={'380€'}
      />
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

export default CardScreen;
