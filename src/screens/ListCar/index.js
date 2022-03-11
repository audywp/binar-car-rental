import {View, Text} from 'react-native';
import React from 'react';
import Helvetica from '../../components/Helvetica';
import {moderateScale} from 'react-native-size-matters';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListMobil from '../../components/Card/ListMobil';
import {listMobil} from '../../helpers/data';
import StatusBarGenerator from '../../components/StatusBar';
import Container from '../../components/Container';

export default function ListCar() {
  return (
    <Container
      style={{
        paddingHorizontal: widthPercentageToDP(4),
      }}>
      <Helvetica
        style={{marginVertical: moderateScale(20)}}
        type="Bold"
        size={moderateScale(14)}>
        Daftar Mobil
      </Helvetica>
      <ListMobil data={listMobil} />
    </Container>
  );
}
