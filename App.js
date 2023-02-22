import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/components/Navigation/navigationTheme';

import AppNavigator from './app/components/Navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
