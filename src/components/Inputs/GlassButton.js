import React, { memo } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import Bglass from '../../assets/Bglass.svg';
import Rglass from '../../assets/Rglass.svg';
import Yglass from '../../assets/Yglass.svg';
import B2glass from '../../assets/B2glass.svg';
import Pglass from '../../assets/Pglass.svg';
import Peglass from '../../assets/Peglass.svg';

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
