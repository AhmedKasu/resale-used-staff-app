import React, { useEffect, useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

import AuthContext from './app/auth/context';
import navigationTheme from './app/components/Navigation/navigationTheme';
import storage from './app/auth/storage';

import AppNavigator from './app/components/Navigation/AppNavigator';
import OfflineNoticeBar from './app/api/components/OfflineNoticeBar';
import AuthNavigator from './app/components/Navigation/AuthNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState(null);
  const [appIsReady, setAppIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await storage.getUser();

    if (user) setUser(user);

    setAppIsReady(true);
  };

  useEffect(() => {
    restoreUser();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) await SplashScreen.hideAsync();
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <OfflineNoticeBar />
          {user ? <AppNavigator /> : <AuthNavigator />}
        </View>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
