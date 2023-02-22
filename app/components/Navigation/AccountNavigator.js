import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MessagesScreen from '../../screens/MessagesScreen';
import MyAccountScreen from '../../screens/MyAccountScreen';
import routes from './routes';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.ACCOUNT_SCREEN} component={MyAccountScreen} />
    <Stack.Screen name={routes.MESSAGES_SCREEN} component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
