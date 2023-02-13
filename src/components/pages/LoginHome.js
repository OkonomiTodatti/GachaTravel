import React, { memo } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Logo from 'src/assets/svg/Logo.svg';
import Gacha from 'src/assets/svg/Gacha.svg';
import Background from 'src/assets/svg/bg2.svg';
import PrimaryButton from 'src/assets/svg/Button.svg';
import SubTitle from 'src/assets/svg/subTitle.svg';

import { GachaTravelColors } from 'src/constants/constants';

export const LoginHome = memo(() => {
  const navigation = useNavigation();

  const onPressSignUp = () => {
    navigation.navigate('アカウント登録');
  };

  const onPressLogin = () => {
    navigation.navigate('ログイン');
  };

  return (
    <View style={styles.container}>
      <Background />
      <View style={[styles.form, styles[`form_${Platform.OS}`]]}>
        <Logo />
        <SubTitle />
        <Gacha />
        <Pressable style={styles.accountButton} onPress={onPressSignUp}>
          <PrimaryButton />
          <Text style={styles.accountButtonText}>アカウントを登録</Text>
        </Pressable>
        <Pressable style={styles.loginButton} onPress={onPressLogin}>
          <Text style={styles.loginButtonText}>ログイン</Text>
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

  form: {
    position: 'absolute',
    left: 0,
    right: 0,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  form_ios: {
    marginVertical: 64,
  },

  accountButton: {
    width: 350,
    height: 90,
    position: 'relative',
    marginTop: 16,
  },

  accountButtonText: {
    color: GachaTravelColors.mainButtonTextColor,
    fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    fontSize: 19,
    position: 'absolute',
    top: 28,
    left: 92,
  },

  loginButton: {
    padding: 16,
    alignItems: 'center',
    borderRadius: 30,
  },

  loginButtonText: {
    color: GachaTravelColors.topLoginTextColor,
    fontWeight: '800',
    fontSize: 16,
  },
});
