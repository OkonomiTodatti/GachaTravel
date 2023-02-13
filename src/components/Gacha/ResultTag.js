import React, { memo } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Bubble from 'src/assets/svg/bubble.svg';

export const ResultTag = memo(() => {
  return (
    <View style={styles.container}>
      <Bubble style={styles.bubble} />
      <Text style={styles.text}>ガチャ結果</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  bubble: {
    position: 'absolute',
  },

  text: {
    height: 50,
    width: 155,
    fontSize: 15,
    color: '#f05e54',
    textAlign: 'center',
    lineHeight: 45,
    fontWeight: 'bold',
    fontFamily: 'Noto Sans',
  },
});
