import React, { memo } from 'react';
import { Platform, View, StyleSheet } from 'react-native';

export const Screen = memo((props) => {
  const { children } = props;
  return (
    <>
      {Platform.OS === 'android' ? (
        <View style={styles.container}>{children}</View>
      ) : (
        <View style={styles.container}>{children}</View>
      )}
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: 'white',
  },
});
