import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterScreen from '../../screens/RegisterScreen';
import LoginScreen from '../../screens/LoginScreen';
import WelcomeScreen from '../../screens/WelcomeScreen';

import routes from './routes';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.REGISTER_SCREEN}
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
    <Stack.Screen name={routes.REGISTER_SCREEN} component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
