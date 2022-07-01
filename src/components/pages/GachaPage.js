import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginHome } from './LoginHome';
import Gacha from '../../assets/ant-design_home-filled.svg';
import Collection from '../../assets/collection.svg';
import Mypage from '../../assets/mypage.svg';
import { GachaTopPage } from './GachaTopPage';
import { CollectionPage } from './CollectionPage';
import { MyPage } from './MyPage';

export const GachaPage = memo(() => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { borderTopLeftRadius: 37, borderTopRightRadius: 37, position: 'absolute', height: '12%' },
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;
        //   if (route.name === 'gachaTopPage') {
        //     iconName = focused ? 'youricon' : 'youricon-outline';
        //   } else if (route.name === 'Collection') {
        //     iconName = focused ? 'youricon' : 'youricon-outline';
        //   } else if (route.name === 'MyPage') {
        //     iconName = focused ? 'youricon' : 'youricon-outline';
        //   }
        //   console.log(route.name);
        // },
      })}
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
        name="Collection"
        component={CollectionPage}
        options={{
          tabBarLabel: 'コレクション',
          tabBarIcon: ({ color, size }) => <Collection />,
          tabBarLabelStyle: { color: '#C3C7C6' },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          tabBarLabel: 'マイページ',
          tabBarIcon: ({ color, size }) => <Mypage />,
          tabBarLabelStyle: { color: '#C3C7C6' },
          headerShown: false,
          animationEnabled: true,
        }}
      />
    </Tab.Navigator>
  );
});
