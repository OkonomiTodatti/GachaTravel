import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';

import { GachaTravelColors } from 'src/constants/constants';

export const Label = memo((props) => {
  const { text, type = 'primary' } = props;
  return <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>;
});

const styles = StyleSheet.create({
  text: {
    fontWeight: '800',
    fontFamily: 'Noto Sans',
    marginTop: 8,
  },
  text_primary: {
    fontSize: 16,
    color: GachaTravelColors.secondaryTextColor,
  },
  text_secondary: {
    fontSize: 14,
    color: GachaTravelColors.mainLabelTextColor,
  },
  text_tertiary: {
    fontSize: 14,
    color: GachaTravelColors.collectionLabelTextColor,
  },
});
