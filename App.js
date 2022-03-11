import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import Router from './src/router/MainRoutes';
import {navigationRef} from './src/helpers/navigate';

const myTheme = {
  ...DefaultTheme,
  colors: {
    background: '#ffffff',
  },
};

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer theme={myTheme} ref={navigationRef}>
      <Router />
    </NavigationContainer>
  );
}
