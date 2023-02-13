import React, { memo, useState } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { GachaTravelColors } from 'src/constants/constants';

import { GachaTopPage } from 'src/components/pages/GachaTopPage';
import { CollectionPage } from 'src/components/pages/CollectionPage';
import { MyPage } from 'src/components/pages/MyPage';

import Gacha from 'src/assets/svg/ant-design_home-filled.svg';
import Collection from 'src/assets/svg/collection.svg';
import Mypage from 'src/assets/svg/mypage.svg';

export const GachaPage = memo(() => {
  const Tab = createBottomTabNavigator();
  const [gachaTab, setGachaTab] = useState(true);
  const [collectionTab, setCollectionTab] = useState(false);
  const [mypageTab, setMypageTab] = useState(false);

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: { borderTopLeftRadius: 37, borderTopRightRadius: 37, position: 'absolute', height: '12%' },
        animation: 'fade',
        headerStyle: {
          backgroundColor: GachaTravelColors.appBarBgColor,
          shadowColor: GachaTravelColors.appBarShadowColor,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 1,
          shadowRadius: 0,
          borderBottomWidth: 0,
          elevation: 0,
        },
        headerTintColor: GachaTravelColors.appBarTextColor,
        headerTitleStyle: {
          color: GachaTravelColors.appBarTextColor,
        },
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
          tabBarIcon: ({ focused }) => (
            <Gacha
              style={{
                color: focused
                  ? GachaTravelColors.bottomNagigationSelectedTextColor
                  : GachaTravelColors.bottomNagigationIconColor,
                opacity: focused ? 1 : 0.5,
              }}
            />
          ),
          tabBarLabelStyle: {
            color: gachaTab
              ? GachaTravelColors.bottomNagigationSelectedTextColor
              : GachaTravelColors.bottomNagigationTextColor,
          },
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
            <Collection
              style={{
                color: focused
                  ? GachaTravelColors.bottomNagigationSelectedTextColor
                  : GachaTravelColors.bottomNagigationIconColor,
                opacity: focused ? 1 : 0.5,
              }}
            />
          ),
          tabBarLabelStyle: {
            color: collectionTab
              ? GachaTravelColors.bottomNagigationSelectedTextColor
              : GachaTravelColors.bottomNagigationTextColor,
          },
          headerTitle: 'コレクション',
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
          tabBarIcon: ({ focused }) => (
            <Mypage
              style={{
                color: focused
                  ? GachaTravelColors.bottomNagigationSelectedTextColor
                  : GachaTravelColors.bottomNagigationIconColor,
                opacity: focused ? 1 : 0.5,
              }}
            />
          ),
          tabBarLabelStyle: {
            color: mypageTab
              ? GachaTravelColors.bottomNagigationSelectedTextColor
              : GachaTravelColors.bottomNagigationTextColor,
          },
          animationEnabled: true,
          headerTitle: 'マイページ',
        }}
      />
    </Tab.Navigator>
  );
});
