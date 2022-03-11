import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Helvetica from '../Helvetica';
import {Style} from './style';
import {moderateScale} from 'react-native-size-matters';

export default function Button({title, width = 0, style = {}}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[Style.container, {width: width}, {...style}]}>
      <Helvetica size={moderateScale(12)} type="Bold" color="white">
        {title}
      </Helvetica>
    </TouchableOpacity>
  );
}
