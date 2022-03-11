import {StyleSheet} from 'react-native';
import {COLOR} from '../../helpers/Color';
import {moderateScale} from 'react-native-size-matters';

export const Style = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(4),
    backgroundColor: COLOR.primaryGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
