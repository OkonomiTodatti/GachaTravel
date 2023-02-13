import React, { memo, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, Pressable } from 'react-native';

import { Overlay } from '@rneui/base';

import { GachaTravelColors } from 'src/constants/constants';

import Background from 'src/assets/svg/SBg.svg';
import Setting from 'src/assets/svg/setting.svg';
import Coin from 'src/assets/svg/coin.svg';
import StartButton from 'src/assets/svg/StartButton.svg';
import Confetti from 'src/assets/svg/Confetti.svg';
import Button from 'src/assets/svg/QuaternaryButton.svg';

import { TravelModal } from 'src/components/Modal/TravelModal';
import { TicketModal } from 'src/components/Modal/TicketModal';
import { MissionModal } from 'src/components/Modal/MissionModal';
import { RootModal } from 'src/components/Modal/RootModal';
import { MemoryModal } from 'src/components/Modal/MemoryModal';
import { BounusModal } from 'src/components/Modal/BounusModal';
import { ResultTag } from 'src/components/Gacha/ResultTag';

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

  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.settingContainer}>
        <TouchableOpacity>
          <Setting />
        </TouchableOpacity>
      </View>
      <View style={styles.moneyContainer}>
        <Coin />
        <Text style={styles.moneyText}>5000</Text>
      </View>
      <View style={[styles.form, styles[`form_${Platform.OS}`]]}>
        <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('SettingGacha')}>
          <StartButton />
        </Pressable>
      </View>
      <Overlay isVisible={true} style={styles.overlay}>
        <Confetti style={styles.confetti} />
        <View style={styles.modalContainer}>
          <ResultTag />
          <Modal nextButton={true} onPressUp={onPressUpPage} onPressDown={onPressDownPage} />
        </View>
        <View style={styles.bottomButtonContainer}>
          <Pressable onPress={() => navigation.navigate('gachaTopPage')}>
            <Button />
            <Text style={[styles.buttonText, styles.stockButtonText]}>ストックする</Text>
          </Pressable>
          <Pressable style={styles.ticketButtonContainer} onPress={() => navigation.navigate('')}>
            <Button />
            <Text style={[styles.buttonText, styles.ticketButtonText]}>チケット購入手続きへ</Text>
          </Pressable>
        </View>
      </Overlay>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GachaTravelColors.mainBgColor,
  },

  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 80,
    right: 20,
  },

  buttonContainer: {
    width: 350,
    height: 90,
    position: 'relative',
  },

  moneyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 190,
    left: 15,
  },

  moneyText: {
    position: 'absolute',
    left: 30,
    fontWeight: 'bold',
    fontSize: 18,
    top: 2,
  },

  overlay: {
    paddingVertical: 10,
    flex: 2,
  },

  modalContainer: {
    width: '90%',
    height: 600,
    position: 'absolute',
    left: -150,
    top: -300,
  },

  bottomButtonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 250,
    left: -150,
  },

  confetti: {
    position: 'absolute',
    left: -180,
    top: -310,
  },

  buttonText: {
    color: GachaTravelColors.secondaryButtonTextColor,
    fontSize: 12,
    fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 27,
  },

  stockButtonText: {
    left: 40,
  },

  ticketButtonContainer: {
    marginLeft: 24,
  },

  ticketButtonText: {
    left: 20,
  },
});
