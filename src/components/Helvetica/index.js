import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLOR} from '../../helpers/Color';

export default function Helvetica({
  type = 'Regular',
  size = 12,
  color = COLOR.primaryBlack,
  align = 'left',
  style = {},
  children,
}) {
  const Style = StyleSheet.create({
    text: {
      fontFamily: `Roboto-${type}`,
      fontSize: size,
      textAlign: align,
      color: color,
      ...style,
    },
  });

  return (
    <Text ellipsizeMode="tail" style={Style.text}>
      {children}
    </Text>
  );
}
