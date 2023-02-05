import React, { memo } from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

import { Spinner } from 'src/components/Spinner/Spinner';
import { GachaTravelColors } from 'src/constants/constants';

export const CustomButton = memo((props) => {
  const { text, onPress, type = 'PRIMARY', isVisible = true, loading = false } = props;
  return (
    <Pressable
      style={[styles.container, isVisible ? styles[`container_${type}`] : styles[`container_TERTIARY`]]}
      onPress={onPress}
      disabled={!isVisible}
    >
      {loading ? (
        <Spinner size="small" />
      ) : (
        <Text style={[styles.text, isVisible ? styles[`text_${type}`] : styles[`text_TERTIARY`]]}>{text}</Text>
      )}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: 55,
    alignItems: 'center',
    width: '100%',
    borderRadius: 30,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 24,
  },

  container_PRIMARY: {
    backgroundColor: GachaTravelColors.mainButtonBgColor,
    borderColor: GachaTravelColors.mainButtonStrokeColor,
    shadowColor: GachaTravelColors.mainButtonShadowColor,
    elevation: 7,
  },

  container_TERTIARY: {
    backgroundColor: GachaTravelColors.mainButtonDisabledBgColor,
    borderColor: GachaTravelColors.mainButtonDisabledStrokeColor,
    shadowColor: GachaTravelColors.mainButtonDisabledShadowColor,
    elevation: 0,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  text_PRIMARY: {
    color: GachaTravelColors.mainButtonTextColor,
  },

  text_TERTIARY: {
    color: GachaTravelColors.mainButtonDisabledTextColor,
  },
});
