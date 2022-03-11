import {View, Text} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import fi_box from '../../assets/images/fi_box.png';
import Helvetica from '../Helvetica';
import {COLOR} from '../../helpers/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Feature({icon = fi_box, title = '', onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          height: moderateScale(56),
          width: moderateScale(56),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLOR.lightGreen,
          borderRadius: moderateScale(8),
          marginBottom: moderateScale(4),
        }}>
        <FastImage
          source={icon}
          resizeMode="contain"
          style={{height: moderateScale(24), width: moderateScale(24)}}
        />
      </View>
      <Helvetica>{title}</Helvetica>
    </TouchableOpacity>
  );
}
