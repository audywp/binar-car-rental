import {View, Text} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import Helvetica from '../Helvetica';
import Feather from 'react-native-vector-icons/Feather';
import {COLOR} from '../../helpers/Color';

export default function ListMobil({data = []}) {
  const RenderItem = ({item}) => {
    const {price = 0} = item;
    const randomNumber = () => {
      return Math.floor(price * Math.random() * 10);
    };

    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: moderateScale(20),
          borderWidth: 1,
          borderColor: '#00000015',
          padding: moderateScale(16),
          borderRadius: moderateScale(4),
        }}>
        <View>
          <FastImage
            source={item.Icon}
            resizeMode="contain"
            style={{height: moderateScale(40), width: moderateScale(40)}}
          />
        </View>
        <View style={{marginLeft: moderateScale(16)}}>
          <Helvetica style={{marginBottom: moderateScale(8)}} type="Bold">
            {item.title}
          </Helvetica>
          <View style={{flexDirection: 'row', marginBottom: moderateScale(8)}}>
            <View
              style={{flexDirection: 'row', marginRight: moderateScale(16)}}>
              <Feather
                name="users"
                color={COLOR.lightGrey}
                size={moderateScale(12)}
              />
              <Helvetica size={12} color={COLOR.lightGrey}>
                {item.totalPenumpang}
              </Helvetica>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Feather
                name="briefcase"
                color={COLOR.lightGrey}
                size={moderateScale(12)}
              />
              <Helvetica size={12} color={COLOR.lightGrey}>
                {item.totalBagasi}
              </Helvetica>
            </View>
          </View>
          <Helvetica size={12} color={COLOR.primaryGreen}>
            {randomNumber()}
          </Helvetica>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={item => item.id}
      renderItem={RenderItem}
    />
  );
}
