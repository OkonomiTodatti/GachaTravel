import React, { memo } from 'react';
import { Text, StyleSheet, ImageBackground, View, Platform, Pressable } from 'react-native';

import { CommonActions } from '@react-navigation/native';

import { GachaTravelColors } from 'src/constants/constants';

import Background from 'src/assets/svg/bg2.svg';
import Logo from 'src/assets/svg/Logo.svg';
import Gacha from 'src/assets/svg/Gacha.svg';
import PrimaryButton from 'src/assets/svg/Button.svg';
import SubTitle from 'src/assets/svg/subTitle.svg';

export const Home = memo((props) => {
  const { navigation } = props;
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: 'GachaPage' }],
  });

  return (
    <View style={styles.container}>
      <Background />
      <View style={[styles.form, styles[`form_${Platform.OS}`]]}>
        <Logo />
        <SubTitle />
        <Gacha />
        <Pressable style={styles.buttonContainer} onPress={() => navigation.dispatch(resetAction)}>
          <PrimaryButton />
          <Text style={styles.buttonText}>はじめる</Text>
        </Pressable>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GachaTravelColors.mainBgColor,
  },

  buttonContainer: {
    maxWidth: 350,
    maxHeight: 90,
    position: 'relative',
    marginTop: 24,
  },

  form: {
    position: 'absolute',
    left: 0,
    right: 0,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  form_ios: {
    marginVertical: 64,
  },

  buttonText: {
    color: GachaTravelColors.mainButtonTextColor,
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Noto Sans',
    top: 27,
    left: 128,
  },
});
