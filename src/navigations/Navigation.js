import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Details } from '../components/pages/Home';
import { Button } from 'react-native';
import { SignScreen } from '../components/pages/SignScreen';

export const Navigation = memo(() => {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="SignUp" component={SignScreen} />
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
