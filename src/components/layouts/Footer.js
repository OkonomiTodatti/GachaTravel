import React, { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const Footer = memo((props) => {
  const { onPress, text, navText } = props;
  return (
    <View style={styles.container}>
      <Text style={{ lineHeight: 100, textAlign: 'center' }}>
        {text}
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{navText}</Text>
        </Pressable>
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '90%',
    bottom: 50,
    borderTopWidth: 2,
    borderColor: '#C4C4C4',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '900',
  },
});
