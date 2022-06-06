import React, { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Details } from '../components/pages/Home';
import { SignInScreen } from '../components/pages/SignInScreen';
import { SignUpScreen } from '../components/pages/SignUpScreen';

export const Navigation = memo(() => {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="サインイン" component={SignInScreen} />
        <Stack.Screen name="サインアップ" component={SignUpScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          animation: 'fade',
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Group>
      {/*<Stack.Screen name="Home" component={Home} />*/}
    </Stack.Navigator>
    // </NavigationContainer>
  );
});
