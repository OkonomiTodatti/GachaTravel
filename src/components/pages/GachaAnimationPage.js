import React, { memo, useEffect, useRef, useState } from 'react';
import LottieView from 'lottie-react-native';

export const GachaAnimationPage = memo(() => {
  const lottieRef = useRef();
  const [gachaState, setGachaState] = useState(true);
  const resetAnimation = () => {
    if (lottieRef.current) {
      lottieRef.current.reset();
      lottieRef.current.play();
    }
  };
  useEffect(() => {
    if (lottieRef.current) {
      if (gachaState) {
        lottieRef.current.play(0, 119);
      } else {
        lottieRef.current.play(119, 119);
      }
    }
  }, [lottieRef, gachaState]);
  return (
    <LottieView
      ref={lottieRef}
      loop={false}
      style={{
        flex: 1,
      }}
      source={require('../../assets/gacha.json')}
    />
  );
});
