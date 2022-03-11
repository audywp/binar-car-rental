import {View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeStyle} from './style';
import Helvetica from '../../components/Helvetica';
import {moderateScale} from 'react-native-size-matters';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import AvatarImage from '../../assets/images/contoh.jpg';
import FastImage from 'react-native-fast-image';
import Button from '../../components/Button';
import CarHero from '../../assets/images/img_car.png';
import {listFeature, listMobil} from '../../helpers/data';
import Feature from '../../components/Card/Feature';
import ListMobil from '../../components/Card/ListMobil';
import {navigate} from '../../helpers/navigate';
import StatusBarGenerator from '../../components/StatusBar';
import {COLOR} from '../../helpers/Color';
import Container from '../../components/Container';

export default function Home() {
  const MoveToSelectedField = () => {
    navigate('daftar mobil');
  };

  return (
    <Container color={COLOR.lightPurple}>
      <View
        style={{
          paddingHorizontal: widthPercentageToDP(4),
          paddingVertical: moderateScale(16),
          ...HomeStyle.container,
        }}>
        <View style={HomeStyle.header}>
          <View>
            <Helvetica>Hi, Audy Wisuda Pratama</Helvetica>
            <Helvetica type="Bold" size={moderateScale(14)}>
              Bandar Lampung
            </Helvetica>
          </View>
          <View>
            <FastImage
              source={AvatarImage}
              resizeMode="contain"
              style={HomeStyle.image}
            />
          </View>
        </View>
      </View>

      <View style={HomeStyle.CarImage}>
        <View style={{justifyContent: 'center', width: moderateScale(180)}}>
          <Helvetica
            style={{marginBottom: moderateScale(10)}}
            color="white"
            size={moderateScale(16)}>
            Sewa Mobil Berkualitas di kawasanmu
          </Helvetica>
          <Button width={moderateScale(109)} title="Sewa Mobil" />
        </View>
        <View
          flex={1}
          style={{
            height: moderateScale(140),
            justifyContent: 'flex-end',
          }}>
          <FastImage
            source={CarHero}
            resizeMode="contain"
            style={{
              height: moderateScale(85),
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          paddingHorizontal: widthPercentageToDP(4),
          marginTop: moderateScale(40),
        }}>
        {listFeature.map(item => {
          return (
            <Feature
              onPress={MoveToSelectedField}
              icon={item.Icon}
              title={item.title}
              key={item.id}
            />
          );
        })}
      </View>
      <View
        style={{
          paddingHorizontal: widthPercentageToDP(4),
          marginTop: moderateScale(24),
        }}>
        <Helvetica
          style={{marginBottom: moderateScale(24)}}
          type="Bold"
          size={moderateScale(16)}>
          Daftar Mobil Pilihan
        </Helvetica>
        <ListMobil data={listMobil} />
      </View>
      <View style={{marginTop: moderateScale(60)}} />
    </Container>
  );
}
