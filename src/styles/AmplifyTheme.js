import React from 'react';
import { StyleSheet } from 'react-native';
import { AmplifyTheme } from 'aws-amplify-react-native';

export const deepSquidInk = '#152939';

const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, { background: 'red' });
export const MyTheme = Object.assign({}, AmplifyTheme, { sectionHeader: MySectionHeader });
