import { View, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';
import ListIcon from '../components/ListIcon';

import colors from '../config/colors';

const MyAccountScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <ListItem
          image={require('../assets/Ahmed.jpg')}
          title={'Ahmed Kasu'}
          subTitle={'ankassu@gmail.com'}
        />
      </View>
      <View style={styles.ListingIcon}>
        <ListIcon
          name={'format-list-bulleted'}
          description={'My Listings'}
          color={'secondary'}
          onPress={() => console.log('My Listings')}
        />
      </View>
      <View style={styles.messagesIcon}>
        <ListIcon
          name={'email'}
          description={'My Messages'}
          color={'primary'}
          onPress={() => console.log('My Messages')}
        />
      </View>
      <View>
        <ListIcon
          name={'logout'}
          description={'Log Out'}
          color={'warning'}
          onPress={() => console.log('logout')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.smokeWhite,
  },
  profile: {
    backgroundColor: colors.white,
    marginVertical: 20,
  },
  ListingIcon: {
    marginTop: 20,
  },
  messagesIcon: {
    marginTop: 2,
    marginBottom: 20,
  },
});

export default MyAccountScreen;
