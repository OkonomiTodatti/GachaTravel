import React, { memo } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export const Footer = memo((props) => {
  const { onPress, text, navText } = props;
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={{ lineHeight: 100, textAlign: 'center' }}>
          {text}
          <Text style={styles.buttonText}>{navText}</Text>
        </Text>
      </Pressable>
      {/*<View style={styles.button}>*/}
      {/*  <Text style={styles.buttonText}>あR</Text>*/}
      {/*</View>*/}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '900',
  },
});
