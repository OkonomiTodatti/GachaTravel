import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const GachaResultDetailPage = memo(() => {
  return (
    <View style={styles.container}>
      <Text>詳細ページです</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
});
