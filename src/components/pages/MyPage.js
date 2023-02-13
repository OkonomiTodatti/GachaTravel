import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { GachaTravelColors } from 'src/constants/constants';

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
    backgroundColor: GachaTravelColors.secondaryBgColor,
  },
});
