import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListingsScreen from '../../screens/ListingsScreen';
import ListingDetailsScreen from '../../screens/ListingDetailsScreen';
import routes from './routes';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, presentation: 'modal' }}>
    <Stack.Screen name={routes.LISTINGS_SCREEN} component={ListingsScreen} />
    <Stack.Screen
      name={routes.LISTING_DETAILS_SCREEN}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
