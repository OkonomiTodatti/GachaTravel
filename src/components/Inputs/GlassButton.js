import React, { memo } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import Bglass from '../../assets/svg/Bglass.svg';
import Rglass from '../../assets/svg/Rglass.svg';
import Yglass from '../../assets/svg/Yglass.svg';
import B2glass from '../../assets/svg/B2glass.svg';
import Pglass from '../../assets/svg/Pglass.svg';
import Peglass from '../../assets/svg/Peglass.svg';

export const GlassButton = memo((props) => {
  const { onPress, color } = props;
  const glassComponents = {
    R: Rglass,
    B: Bglass,
    B2: B2glass,
    Y: Yglass,
    P: Pglass,
    Pe: Peglass,
  };

  const Glass = glassComponents[color];

  return (
    <Pressable onPress={() => console.log('push')}>
      <Glass style={styles.glass} />
    </Pressable>
  );
});

const styles = StyleSheet.create({
  glass: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
