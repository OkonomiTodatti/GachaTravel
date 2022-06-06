import React from 'react';
import type { Node } from 'react';
import { Amplify } from '@aws-amplify/core';
import { awsmobile } from './src/aws-exports';
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Screen } from './src/components/layouts/Screen';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigations/Navigation';

Amplify.configure({
  ...awsmobile,
  Analytics: {
    disabled: true,
  },
});

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password',
    },
  ],
};

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Screen>
        <Navigation />
      </Screen>
    </NavigationContainer>
  );
};

// const customTheme = { ...AmplifyTheme, button: { ...AmplifyTheme.button, backgroundColor: 'blue', borderRadius: 10 } };

export default App;
// export default withAuthenticator(App, { signUpConfig, theme: customTheme });
