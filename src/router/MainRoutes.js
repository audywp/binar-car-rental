import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

export default function MainRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="main" component={BottomTab} />
    </Stack.Navigator>
  );
}
