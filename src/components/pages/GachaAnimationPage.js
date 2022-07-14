import React, { memo, useEffect, useRef, useState } from 'react';
import LottieView from 'lottie-react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { listStocks } from '../../graphql/queries';
import { createStock } from '../../graphql/mutations';
import { useLoginUser } from '../../provider/LoginUserProvider';
import { Overlay } from '@rneui/base';
import { Text, View } from 'react-native';

export const GachaAnimationPage = memo((props) => {
  const { navigation } = props;
  const lottieRef = useRef();
  const [gachaState, setGachaState] = useState(true);
  const [visible, setVisible] = useState(true);
  const { loginUser } = useLoginUser();
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

  setTimeout(() => {
    // setGachaState(false);
    // fetchCreateStock({
    //   user_id: loginUser,
    //   ticket_id: Math.round(Math.random() * 3 + 1),
    //   plan_id: '1',
    //   status: 'Before',
    //   people: '1',
    // }).then(() => navigation.navigate('GachaPage'));
    navigation.navigate('GachaPage');
  }, 5.05 * 1000);

  async function fetchCreateStock(stockDatas) {
    try {
      await API.graphql(graphqlOperation(createStock, { input: stockDatas }));
    } catch (err) {
      console.log(err);
    }
  }

  const toggleOverlay = () => setVisible(!visible);

  return (
    <View style={{ position: 'relative' }}>
      <Text>こんにちは</Text>
      <Overlay isVisible={visible} style={{ height: '100%', width: '80%' }}>
        <LottieView
          ref={lottieRef}
          loop={false}
          style={{
            width: 300,
            height: 200,
            left: -45,
            top: -25,
            backgroundColor: '#919191',
            // backgroundColor:'rgba(145, 145, 145, .1)',
            flex: 1,
            position: 'absolute',
          }}
          source={require('../../assets/43029-gacha-world-mascot-entrance-animation (1).json')}
          resizeMode="cover"
        />
      </Overlay>
    </View>
  );
});
