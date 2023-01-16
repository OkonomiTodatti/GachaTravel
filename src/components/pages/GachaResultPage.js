import React, { memo, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, Pressable } from 'react-native';
import { Overlay } from '@rneui/base';
import Background from '../../assets/SBg.svg';
import Setting from '../../assets/setting.svg';
import Coin from '../../assets/coin.svg';
import StartButton from '../../assets/StartButton.svg';
import { TravelModal } from '../Modal/TravelModal';
import Confetti from '../../assets/Confetti.svg';
import { ResultTag } from '../Gacha/ResultTag';
import Button from '../../assets/QuaternaryButton.svg';
import { TicketModal } from '../Modal/TicketModal';
import { MissionModal } from '../Modal/MissionModal';
import { RootModal } from '../Modal/RootModal';
import { MemoryModal } from '../Modal/MemoryModal';
import { BounusModal } from '../Modal/BounusModal';
import { useGetStocks } from '../../hooks/useGetStocks';
import { useEffect } from '@types/react';
import { useLoginUser } from '../../provider/LoginUserProvider';

export const GachaResultPage = memo((props) => {
  const { navigation } = props;
  const [count, setCount] = useState(1);

  const onPressUpPage = () => (count < 6 ? setCount(count + 1) : setCount(6));
  const onPressDownPage = () => (count > 1 ? setCount(count - 1) : setCount(1));

  const modalComponents = {
    1: TravelModal,
    2: TicketModal,
    3: MissionModal,
    4: RootModal,
    5: MemoryModal,
    6: BounusModal,
  };
  const Modal = modalComponents[count];

  // setTimeout(() => {
  //   // setGachaState(false);
  //   // fetchCreateStock({
  //   //   user_id: loginUser,
  //   //   ticket_id: Math.round(Math.random() * 3 + 1),
  //   //   plan_id: '1',
  //   //   status: 'Before',
  //   //   people: '1',
  //   // }).then(() => navigation.navigate('GachaPage'));
  //   navigation.navigate('GachaPage');
  //   // navigation.navigate('GachaResult');
  // }, 10 * 1000);

  return (
    <View style={styles.container}>
      <Background />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', top: 80, right: 20 }}>
        <TouchableOpacity>
          <Setting />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', top: 190, left: 15 }}>
        <Coin />
        <Text style={{ position: 'absolute', left: 30, fontWeight: 'bold', fontSize: 18, top: 2 }}>5000</Text>
      </View>
      <View style={[styles.form, styles[`form_${Platform.OS}`]]}>
        {/*<CustomButton text="START" onPress={() => navigation.navigate('SettingGacha')} />*/}
        <Pressable
          style={{ width: 350, height: 90, position: 'relative' }}
          onPress={() => navigation.navigate('SettingGacha')}
        >
          <StartButton />
        </Pressable>
      </View>
      <Overlay isVisible={true} style={{ paddingVertical: 10, flex: 2 }}>
        <Confetti style={{ position: 'absolute', left: -180, top: -310 }} />
        <View style={{ width: '90%', height: 600, position: 'absolute', left: -150, top: -300 }}>
          <ResultTag />
          {/*<TravelModal nextButton={true} onPressUp={onPressUpPage} onPressDown={onPressDownPage} />*/}
          <Modal nextButton={true} onPressUp={onPressUpPage} onPressDown={onPressDownPage} />
        </View>
        <View style={{ flexDirection: 'row', position: 'absolute', top: 250, left: -150 }}>
          {/*<Pressable onPress={() => navigation.navigate('gachaTopPage')}>*/}
          <Pressable onPress={() => navigation.navigate('gachaTopPage')}>
            <Button />
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Noto Sans',
                fontWeight: 'bold',
                textAlign: 'center',
                position: 'absolute',
                top: 27,
                left: 40,
              }}
            >
              ストックする
            </Text>
          </Pressable>
          <Pressable style={{ marginLeft: 20 }} onPress={() => navigation.navigate('')}>
            <Button />
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Noto Sans',
                fontWeight: 'bold',
                textAlign: 'center',
                position: 'absolute',
                top: 27,
                left: 20,
              }}
            >
              チケット購入手続きへ
            </Text>
          </Pressable>
        </View>
      </Overlay>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
