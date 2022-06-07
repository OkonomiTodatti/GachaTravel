import React, { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Details } from '../components/pages/Home';
import { SignInScreen } from '../components/pages/SignInScreen';
import { SignUpScreen } from '../components/pages/SignUpScreen';
import { ConfirmSignUpPage } from '../components/pages/ConfirmSignUpPage';
import { ForgotNewPasswordPage, ForgotPasswordPage } from '../components/pages/ForgotPasswordPage';

export const Navigation = memo(() => {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          animation: 'fade',
        }}
      >
        <Stack.Screen name="サインイン" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="サインアップ" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="認証" component={ConfirmSignUpPage} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotNewPassword" component={ForgotNewPasswordPage} options={{ headerShown: false }} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Group>
      {/*<Stack.Screen name="Home" component={Home} />*/}
    </Stack.Navigator>
    // </NavigationContainer>
  );
});
