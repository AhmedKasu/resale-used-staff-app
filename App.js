import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/components/Navigation/navigationTheme';

import AppNavigator from './app/components/Navigation/AppNavigator';
import SafeAreaScreen from './app/screens/SafeAreScreen';
import ImageInputList from './app/components/Lists/ImageInputList';

export default function App() {
  // const [images, setImages] = useState([]);
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
    // <SafeAreaScreen>
    //   <ImageInputList
    //     images={images}
    //     onAddImage={(image) => {
    //       setImages([...images, image]), console.log('image: ', image);
    //     }}
    //   />
    // </SafeAreaScreen>
  );
}
