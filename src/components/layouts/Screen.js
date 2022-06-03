import React, { memo } from 'react';
import { Platform, SafeAreaView, View, StyleSheet, StatusBar } from 'react-native';

export const Screen = memo((props) => {
  const { children } = props;
  return (
    <>
      {Platform.OS === 'android' ? (
        <View style={styles.container}>{children}</View>
      ) : (
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      )}
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  },
});
