import React, { memo } from 'react';
import { TextInput, StyleSheet, View, Text, Pressable } from 'react-native';

export const CustomButton = memo((props) => {
  const { text, onPress, type = 'PRIMARY' } = props;
  return (
    <Pressable style={[styles.container, styles[`container_${type}`]]} onPress={onPress}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginLeft: 10,
    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    marginTop: 20,
    width: '40%',
    backgroundColor: '#3B71F3',
  },

  container_TERTIARY: {
    marginVertical: 5,
    width: '100%',
  },

  text: {
    fontWeight: 'bold',
  },

  text_PRIMARY: {
    color: 'white',
  },
  text_TERTIARY: {
    color: 'gray',
  },
});
