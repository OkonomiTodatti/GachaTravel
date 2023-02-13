import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';

export const CustomText = memo(({ children }) => {
  return <Text style={styles.fontFamily}>{children}</Text>;
});

const styles = StyleSheet.create({
  fontFamily: 'Noto Sans',
});
