import React, { memo } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const Spinner = memo((props) => {
  const { size, color } = props;
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
});

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
