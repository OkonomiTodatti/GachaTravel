import React from 'react';

import { Amplify } from '@aws-amplify/core';
import { NavigationContainer } from '@react-navigation/native';

import { Navigation } from './src/navigations/Navigation';

import { LoginUserProvider } from './src/provider/LoginUserProvider';

import awsmobile from './src/aws-exports';

Amplify.configure({
  ...awsmobile,
  Analytics: {
    disabled: true,
  },
});

const App = () => {
  return (
    <LoginUserProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </LoginUserProvider>
  );
};

export default App;
