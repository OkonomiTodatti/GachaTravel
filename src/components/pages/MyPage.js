import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const MyPage = memo(() => {
  return (
    <View style={styles.container}>
      <Text>マイページ</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
});
