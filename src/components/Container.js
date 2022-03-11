import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import StatusBarGenerator from './StatusBar';

export default function Container(props) {
  return (
    <SafeAreaView style={{flex: 1, ...props.style}}>
      <StatusBarGenerator {...props} />
      {props.children}
    </SafeAreaView>
  );
}
