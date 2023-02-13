import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';

import { GachaTravelColors } from 'src/constants/constants';

export const Spinner = memo((props) => {
  const { size } = props;
  return <ActivityIndicator size={size} color={GachaTravelColors.spinnerColor} />;
});
