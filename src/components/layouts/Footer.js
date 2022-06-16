import React, { memo } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Platform } from 'react-native';

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
    bottom: Platform.OS === 'ios' ? 50 : 20,
    borderTopWidth: 2,
    borderColor: '#C4C4C4',
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
    lineHeight: Platform.OS === 'ios' ? 100 : 50,
    textAlign: 'center',
  },
});
