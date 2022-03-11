import {StatusBar} from 'react-native';
import React from 'react';
import {useIsFocused} from '@react-navigation/native';

export default function StatusBarGenerator({
  color = 'white',
  barStyle = 'dark',
}) {
  const isFocused = useIsFocused();

  if (!isFocused) {
    return null;
  }

  return <StatusBar backgroundColor={color} barStyle={`${barStyle}-content`} />;
}
