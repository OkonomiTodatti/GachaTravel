import React, { memo, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

export const MyPage = memo(() => {
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
    <View style={styles.container}>
      <Text>マイページ</Text>
      <LottieView
        ref={lottieRef}
        loop={false}
        style={{
          width: 300,
          height: 300,
        }}
        source={require('../../assets/gacha.json')}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
