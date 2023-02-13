import React, { memo } from 'react';
import { Platform, View, StyleSheet } from 'react-native';

import { GachaTravelColors } from 'src/constants/constants';

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
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: GachaTravelColors.mainBgColor,
  },
});
