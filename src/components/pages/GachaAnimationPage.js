import React, { memo, useEffect, useRef, useState } from 'react';
import LottieView from 'lottie-react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { listStocks } from '../../graphql/queries';
import { createStock } from '../../graphql/mutations';
import { useLoginUser } from '../../provider/LoginUserProvider';

export const GachaAnimationPage = memo((props) => {
  const { navigation } = props;
  const lottieRef = useRef();
  const [gachaState, setGachaState] = useState(true);
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
    fetchCreateStock({
      user_id: loginUser,
      ticket_id: Math.round(Math.random() * 3 + 1),
      plan_id: '1',
      status: 'Before',
      people: '1',
    }).then(() => navigation.navigate('GachaPage'));
    // navigation.navigate('GachaPage');
  }, 5.05 * 1000);

  async function fetchCreateStock(stockDatas) {
    try {
      await API.graphql(graphqlOperation(createStock, { input: stockDatas }));
    } catch (err) {
      console.log(err);
    }
  }

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
