import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import ListCar from '../screens/ListCar';
import Account from '../screens/Account';
import Feather from 'react-native-vector-icons/Feather';
import {COLOR} from '../helpers/Color';
import {moderateScale} from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  const RenderIcon = ({name, focused}) => {
    return (
      <Feather
        name={name}
        color={focused ? COLOR.primaryBlue : COLOR.primaryBlack}
        size={moderateScale(24)}
      />
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          height: moderateScale(44),
          paddingVertical: moderateScale(4),
        },
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <RenderIcon name="home" focused={focused} />
          ),
          title: 'Home',
          tabBarLabelStyle: {
            fontSize: moderateScale(10),
            fontFamily: 'Helvetica-Regular',
          },
        }}
      />
      <Tab.Screen
        name="daftar mobil"
        component={ListCar}
        options={{
          tabBarIcon: ({focused}) => (
            <RenderIcon name="list" focused={focused} />
          ),
          title: 'Daftar Mobil',
          tabBarLabelStyle: {
            fontSize: moderateScale(10),
            fontFamily: 'Helvetica-Regular',
          },
        }}
      />
      <Tab.Screen
        name="akun"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <RenderIcon name="user" focused={focused} />
          ),
          title: 'Akun',
          tabBarLabelStyle: {
            fontSize: moderateScale(10),
            fontFamily: 'Helvetica-Regular',
          },
        }}
      />
    </Tab.Navigator>
  );
}
