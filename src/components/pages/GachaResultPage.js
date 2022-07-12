import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

export const GachaResultPage = memo((props) => {
  const { navigation } = props;

  return <View style={styles.container}></View>;
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  form: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 85,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
