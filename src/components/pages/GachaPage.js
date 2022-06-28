import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginHome } from './LoginHome';
import Gacha from '../../assets/ant-design_home-filled.svg';

export const GachaPage = memo(() => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Screen
      name="loginHome"
      component={LoginHome}
      options={{
        tabBarLabel: 'ガチャ',
        tabBarIcon: ({ color, size }) => <Gacha />,
        tabBarBadge: 3,
      }}
    />
  );
});
