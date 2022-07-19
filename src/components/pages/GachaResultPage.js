import React, { memo } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, Pressable } from 'react-native';
import { Overlay } from '@rneui/base';
import Background from '../../assets/SBg.svg';
import Setting from '../../assets/setting.svg';
import Coin from '../../assets/coin.svg';
import StartButton from '../../assets/StartButton.svg';

export const GachaResultPage = memo((props) => {
  const { navigation } = props;

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
      <Overlay isVisible={true}>
        <View style={{ backgroundColor: 'white', width: 200, height: 200, position: 'absolute', top: -90, left: -90 }}>
          <Text>こんにちは</Text>
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
