import React, { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { GachaTravelColors } from 'src/constants/constants';

export const Footer = memo((props) => {
  const { onPress, text, navText } = props;
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.textContainer}>
          {text}
          <Text style={styles.buttonText}>{navText}</Text>
        </Text>
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '90%',
    bottom: 48,
    borderTopWidth: 2,
    borderColor: GachaTravelColors.borderColor,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '900',
  },
  textContainer: {
    lineHeight: 100,
    textAlign: 'center',
  },
});
