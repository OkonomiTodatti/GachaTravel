import React, { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Details } from '../components/pages/Home';
import { SignInScreen } from '../components/pages/SignInScreen';
import { SignUpScreen } from '../components/pages/SignUpScreen';
import { ConfirmSignUpPage } from '../components/pages/ConfirmSignUpPage';

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
