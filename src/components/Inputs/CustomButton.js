import React, { memo } from 'react';
import { TextInput, StyleSheet, View, Text, Pressable } from 'react-native';

export const CustomButton = memo((props) => {
  const { text, onPress, type } = props;
  return (
    <Pressable style={[styles.container, styles[`container_${type}`]]} onPress={onPress}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B71F3',
    width: '40%',
    padding: 15,
    marginVertical: 20,
    marginLeft: 10,
    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },

  container_SECONDARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
