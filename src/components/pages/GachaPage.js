import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginHome } from './LoginHome';
import Gacha from '../../assets/ant-design_home-filled.svg';
import Collection from '../../assets/collection.svg';
import MyPage from '../../assets/mypage.svg';
import { GachaTopPage } from './GachaTopPage';

export const GachaPage = memo(() => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { borderTopLeftRadius: 37, borderTopRightRadius: 37, position: 'absolute', height: '12%' },
      }}
    >
      <Tab.Screen
        name="gachaTopPage"
        component={GachaTopPage}
        options={{
          tabBarLabel: 'ガチャ',
          tabBarIcon: ({ color, size }) => <Gacha />,
          tabBarLabelStyle: { color: '#F13C31' },
          tabBarBadge: '',
          tabBarBadgeStyle: { maxWidth: 18, maxHeight: 18 },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="a"
        component={GachaTopPage}
        options={{
          tabBarLabel: 'コレクション',
          tabBarIcon: ({ color, size }) => <Collection />,
          tabBarLabelStyle: { color: '#C3C7C6' },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="b"
        component={GachaTopPage}
        options={{
          tabBarLabel: 'マイページ',
          tabBarIcon: ({ color, size }) => <MyPage />,
          tabBarLabelStyle: { color: '#C3C7C6' },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
});
