import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';

export const Label = memo((props) => {
  const { text, type = 'primary' } = props;
  return <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>;
});

const styles = StyleSheet.create({
  text: {
    letterSpacing: 4,
    fontWeight: '800',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  text_primary: {
    fontSize: 16,
    color: '#2D2A2A',
  },
  text_secondary: {
    fontSize: 14,
    color: '#777777',
  },
});
