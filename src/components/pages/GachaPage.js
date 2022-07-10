import React, { memo, useCallback, useEffect, useState } from 'react';
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
  const [gachaTab, setGachaTab] = useState(true);
  const [collectionTab, setCollectionTab] = useState(false);
  const [mypageTab, setMypageTab] = useState(false);

  // const [selectTab, setSelectTab] = useState({ gacha: true, collection: false, mypage: false });

  // const setFocusTab = useCallback(
  //   (key, value) => {
  //     setSelectTab({ ...selectTab, [key]: value });
  //   },
  //   [],
  // );

  // function setFocusTab(key, value) {
  //   setSelectTab({ ...selectTab, [key]: value });
  // }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { borderTopLeftRadius: 37, borderTopRightRadius: 37, position: 'absolute', height: '12%' },
        // tabBarIcon: ({ focused }) => {
        //   if (route.name === 'gachaTopPage') {
        //     setSelectTab('gacha', focused);
        //   } else if (route.name === 'Collection') {
        //     setSelectTab('collection', focused);
        //   } else if (route.name === 'MyPage') {
        //     setSelectTab('mypage', focused);
        //   }
        // },
      })}
    >
      <Tab.Screen
        name="gachaTopPage"
        component={GachaTopPage}
        listeners={{
          tabPress: () => {
            setGachaTab(true);
            setCollectionTab(false);
            setMypageTab(false);
          },
        }}
        options={{
          tabBarLabel: 'ガチャ',
          tabBarIcon: ({ focused, color, size }) => (
            <Gacha style={{ color: focused ? '#F13C31' : '#C3C7C6', opacity: focused ? 1 : 0.5 }} />
          ),
          tabBarLabelStyle: { color: gachaTab ? '#F13C31' : '#C3C7C6' },
          tabBarBadgeStyle: { maxWidth: 18, maxHeight: 18 },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Collection"
        component={CollectionPage}
        listeners={{
          tabPress: () => {
            setGachaTab(false);
            setCollectionTab(true);
            setMypageTab(false);
          },
        }}
        options={{
          tabBarLabel: 'コレクション',
          tabBarIcon: ({ focused, color, size }) => (
            <Collection style={{ color: focused ? '#F13C31' : '#C3C7C6', opacity: focused ? 1 : 0.6 }} />
          ),
          tabBarLabelStyle: { color: collectionTab ? '#F13C31' : '#C3C7C6' },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        listeners={{
          tabPress: () => {
            setGachaTab(false);
            setCollectionTab(false);
            setMypageTab(true);
          },
        }}
        options={{
          tabBarLabel: 'マイページ',
          tabBarIcon: ({ focused, color, size }) => (
            <Mypage style={{ color: focused ? '#F13C31' : '#C3C7C6', opacity: focused ? 1 : 0.3 }} />
          ),
          tabBarLabelStyle: { color: mypageTab ? '#F13C31' : '#C3C7C6' },
          headerShown: false,
          animationEnabled: true,
        }}
      />
    </Tab.Navigator>
  );
});
