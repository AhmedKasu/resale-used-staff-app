import { View, StyleSheet, FlatList } from 'react-native';

import useAuth from '../hooks/useAuth';

import ListItem from '../components/Lists/ListItem';
import CustomIcon from '../components/CustomIcon';
import ListSeparator from '../components/Lists/ListSeparator';
import routes from '../components/Navigation/routes';
import SafeAreaScreen from './SafeAreScreen';

import colors from '../config/colors';

const items = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
    targetScreen: 'MyListings',
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES_SCREEN,
  },
];

const MyAccountScreen = ({ navigation }) => {
  const { logOut, user } = useAuth();
  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <View style={styles.profile}>
          <ListItem
            image={require('../assets/Ahmed.jpg')}
            title={user.name}
            subTitle={user.email}
          />
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.title}
            ItemSeparatorComponent={ListSeparator}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                IconComponent={
                  <CustomIcon
                    name={item.icon.name}
                    color={item.icon.backgroundColor}
                  />
                }
                onPress={() => navigation.navigate(item.targetScreen)}
              />
            )}
          />
        </View>

        <View style={styles.ListingIcon}>
          <ListItem
            title={'Logout'}
            onPress={() => logOut()}
            IconComponent={
              <CustomIcon name={'logout'} color={colors.warning} />
            }
          />
        </View>
      </View>
    </SafeAreaScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.smokeWhite,
  },
  profile: {
    marginVertical: 20,
  },
  flatList: {
    marginVertical: 40,
  },
  messagesIcon: {
    marginTop: 2,
    marginBottom: 20,
  },
});

export default MyAccountScreen;
