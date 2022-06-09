import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';

export const Label = memo((props) => {
  const { text } = props;
  return <Text style={styles.text}>{text}</Text>;
});

const styles = StyleSheet.create({
  text: {
    color: '#2D2A2A',
    fontSize: 16,
    letterSpacing: 4,
    fontWeight: '800',
    alignItems: 'flex-start',
    marginTop: 10,
  },
});
