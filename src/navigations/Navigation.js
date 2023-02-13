import React, { memo } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from 'src/components/pages/Home';
import { SignInScreen } from 'src/components/pages/SignInScreen';
import { SignUpScreen } from 'src/components/pages/SignUpScreen';
import { ConfirmSignUpPage } from 'src/components/pages/ConfirmSignUpPage';
import { ForgotNewPasswordPage, ForgotPasswordPage } from 'src/components/pages/ForgotPasswordPage';
import { LoginHome } from 'src/components/pages/LoginHome';
import { SettingGacha } from 'src/components/pages/SettingGacha';
import { GachaPage } from 'src/components/pages/GachaPage';
import { GachaAnimationPage } from 'src/components/pages/GachaAnimationPage';
import { GachaResultPage } from 'src/components/pages/GachaResultPage';
import { GachaResultDetailPage } from 'src/components/pages/GachaResultDetailPage';
import { BuyTicketPage } from 'src/components/pages/BuyTicketPage';

export const Navigation = memo(() => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'fade',
        headerStyle: {
          backgroundColor: '#FF654A',
          shadowColor: '#AD150C',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 1,
          shadowRadius: 0,
          borderBottomWidth: 0,
          elevation: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff',
        },
        headerShadowVisible: true,
      }}
    >
      <Stack.Group
        screenOptions={{
          headerBackTitleVisible: false,
          headerBackTitleStyle: { marginLeft: 20 },
        }}
      >
        <Stack.Screen name="loginHome" component={LoginHome} options={{ headerShown: false }} />
        <Stack.Screen name="ログイン" component={SignInScreen} />
        <Stack.Screen name="アカウント登録" component={SignUpScreen} />
        <Stack.Screen name="認証設定" component={ConfirmSignUpPage} options={{ headerTitle: 'アカウント登録' }} />
        <Stack.Screen name="再設定メールの送信" component={ForgotPasswordPage} />
        <Stack.Screen name="パスワード再設定" component={ForgotNewPasswordPage} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen
          name="SettingGacha"
          component={SettingGacha}
          options={{ headerBackTitle: 'キャンセル', headerTitle: 'ガチャを回す' }}
        />
        <Stack.Screen name="GachaPage" component={GachaPage} options={{ headerShown: false }} />
        <Stack.Screen name="GachaAnimation" component={GachaAnimationPage} options={{ headerShown: false }} />
        <Stack.Screen name="GachaResult" component={GachaResultPage} options={{ headerShown: false }} />
        <Stack.Screen
          name="GachaResultDetail"
          component={GachaResultDetailPage}
          options={({ route }) => ({
            headerStyle: {
              backgroundColor: '#FFF3D1',
              shadowColor: '#F4E2AF',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 1,
              shadowRadius: 0,
              borderBottomWidth: 0,
              elevation: 0,
            },
            headerTintColor: '#683719',
            headerTitleStyle: {
              color: '#683719',
            },
            headerBackTitleVisible: false,
            title: route.params.name,
          })}
        />
        <Stack.Screen
          name="BuyTicket"
          component={BuyTicketPage}
          options={{ headerTitle: 'チケット購入手続き', headerBackTitleVisible: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
});
