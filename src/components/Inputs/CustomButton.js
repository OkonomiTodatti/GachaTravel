import React, { memo } from 'react';
import { TextInput, StyleSheet, View, Text, Pressable } from 'react-native';
import { Spinner } from '../Spinner/Spinner';

export const CustomButton = memo((props) => {
  const { text, onPress, type = 'PRIMARY', isVisible = true, loading = false } = props;
  return (
    <Pressable
      style={[styles.container, isVisible ? styles[`container_${type}`] : styles[`container_TERTIARY`]]}
      onPress={onPress}
      disabled={!isVisible}
    >
      {loading ? (
        <Spinner size="small" color="#fff" />
      ) : (
        <Text style={[styles.text, isVisible ? styles[`text_${type}`] : styles[`text_TERTIARY`]]}>{text}</Text>
      )}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
  },

  container_PRIMARY: {
    marginTop: 20,
    width: '100%',
    height: 55,
    backgroundColor: '#FF654A',
    shadowColor: '#CB472F',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 7,
  },

  container_TERTIARY: {
    backgroundColor: '#E2E2E2',
    marginVertical: 5,
    width: '100%',
    shadowColor: '#B3B3B3',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  text_PRIMARY: {
    color: '#FFFFFF',
  },
  text_TERTIARY: {
    color: '#B3B3B3',
  },
});
