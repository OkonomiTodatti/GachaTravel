import React, { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Details } from '../components/pages/Home';
import { SignInScreen } from '../components/pages/SignInScreen';
import { SignUpScreen } from '../components/pages/SignUpScreen';
import { ConfirmSignUpPage } from '../components/pages/ConfirmSignUpPage';
import { ForgotNewPasswordPage, ForgotPasswordPage } from '../components/pages/ForgotPasswordPage';
import { LoginHome } from '../components/pages/LoginHome';
import { SettingGacha } from '../components/pages/SettingGacha';
import { GachaPage } from '../components/pages/GachaPage';
import { CollectionPage } from '../components/pages/CollectionPage';
import { GachaAnimationPage } from '../components/pages/GachaAnimationPage';

export const Navigation = memo(() => {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
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
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen
          name="SettingGacha"
          component={SettingGacha}
          options={{ headerBackTitle: 'キャンセル', headerTitle: 'ガチャを回す' }}
        />
        <Stack.Screen name="GachaPage" component={GachaPage} options={{ headerShown: false }} />
        <Stack.Screen name="GachaAnimation" component={GachaAnimationPage} options={{ headerShown: false }} />
      </Stack.Group>
      {/*<Stack.Screen name="Home" component={Home} />*/}
    </Stack.Navigator>
    // </NavigationContainer>
  );
});
