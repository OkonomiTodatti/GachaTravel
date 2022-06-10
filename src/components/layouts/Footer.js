import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Footer = memo(() => {
  return (
    <View style={styles.container}>
      <Text>
        アカウントをお持ちの方は<Text>こちら</Text>
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
