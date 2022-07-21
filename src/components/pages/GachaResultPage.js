import React, { memo } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, Pressable } from 'react-native';
import { Overlay } from '@rneui/base';
import Background from '../../assets/SBg.svg';
import Setting from '../../assets/setting.svg';
import Coin from '../../assets/coin.svg';
import StartButton from '../../assets/StartButton.svg';
import { TravelModal } from '../Modal/TravelModal';
import Confetti from '../../assets/Confetti.svg';
import { ResultTag } from '../Gacha/ResultTag';

export const GachaResultPage = memo((props) => {
  const { navigation } = props;

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
          <TravelModal nextButton={true} />
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
