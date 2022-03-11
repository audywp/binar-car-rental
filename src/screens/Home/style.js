import {StyleSheet} from 'react-native';
import {COLOR} from '../../helpers/Color';
import {moderateScale} from 'react-native-size-matters';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export const HomeStyle = StyleSheet.create({
  container: {
    backgroundColor: COLOR.lightPurple,
    height: moderateScale(150),
  },
  image: {
    height: moderateScale(28),
    width: moderateScale(28),
    borderRadius: moderateScale(28),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CarImage: {
    marginHorizontal: widthPercentageToDP(4),
    borderRadius: moderateScale(8),
    marginTop: moderateScale(-70),
    paddingLeft: moderateScale(20),
    backgroundColor: COLOR.darkPurple,
    flexDirection: 'row',
  },
});
