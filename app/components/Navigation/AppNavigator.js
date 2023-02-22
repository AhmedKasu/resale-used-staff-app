import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountNavigator from './AccountNavigator';
import colors from '../../config/colors';
import FeedNavigator from './FeedNavigator';
import ListingPostScreen from '../../screens/ListingPostScreen';
import NewListingButton from './NewListingButton';
import routes from './routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name='home' size={size} color={color} />
        ),
        tabBarActiveTintColor: colors.secondary,
      }}
      name={routes.FEED_NAVIGATOR}
      component={FeedNavigator}
    />
    <Tab.Screen
      options={{
        tabBarButton: ({ onPress }) => <NewListingButton onPress={onPress} />,
      }}
      name={routes.LISTING_POST_SCREEN}
      component={ListingPostScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name='account' size={size} color={color} />
        ),
        tabBarActiveTintColor: colors.secondary,
      }}
      name={routes.ACCOUNT_NAVIGATOR}
      component={AccountNavigator}
    />
  </Tab.Navigator>
);

export default AppNavigator;
