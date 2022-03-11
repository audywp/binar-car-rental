import {View, Text} from 'react-native';
import React from 'react';
import Helvetica from '../../components/Helvetica';
import {moderateScale} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import NoAccount from '../../assets/images/pemandangan.png';
import Button from '../../components/Button';
import StatusBarGenerator from '../../components/StatusBar';
import Container from '../../components/Container';

export default function Account() {
  return (
    <Container style={{paddingHorizontal: widthPercentageToDP(4)}}>
      <Helvetica
        style={{marginTop: moderateScale(20)}}
        type="Bold"
        size={moderateScale(14)}>
        Akun
      </Helvetica>

      <View justifyContent="space-evenly" flex={1}>
        <View>
          <FastImage source={NoAccount} style={{height: moderateScale(192)}} />
          <Helvetica style={{marginTop: moderateScale(20)}} align="center">
            Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR
            lebih mudah
          </Helvetica>
          <Button
            style={{alignSelf: 'center', marginTop: moderateScale(20)}}
            width={moderateScale(90)}
            title="Register"
          />
        </View>
        <View />
      </View>
    </Container>
  );
}
