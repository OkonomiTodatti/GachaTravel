import React, { memo } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Logo from '../../assets/Logo.svg';
import Gacha from '../../assets/Gacha.svg';
import Background from '../../assets/bg2.svg';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from '../Inputs/CustomButton';
import PrimaryButton from '../../assets/Button.svg';
import SubTitle from '../../assets/subTitle.svg';

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
      {/*<LinearGradient colors={['#DDEEF2', '#ADE1E9', '#77DEEC']} style={styles.linearGradient}>*/}
      <Background />
      <View style={[styles.form, styles[`form_${Platform.OS}`]]}>
        {/*<Image source={Logo} style={[styles.Logo, { height: height * 0.3 }]} resizeMode="contain" />*/}
        <Logo />
        <SubTitle />
        {/*<Text style={[styles.text, styles[`text_${Platform.OS}`]]}>ガチャで旅行先を決められる</Text>*/}
        {/*<Text style={[styles.text, styles[`text_${Platform.OS}`]]}>お得な旅行サポートアプリ</Text>*/}
        <Gacha />
        {/*<CustomButton text="アカウント登録" onPress={onPressSignUp} />*/}
        <Pressable style={{ width: 350, height: 90, position: 'relative', marginTop: 14 }} onPress={onPressSignUp}>
          <PrimaryButton />
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Noto Sans',
              fontWeight: 'bold',
              fontSize: 19,
              position: 'absolute',
              top: 30,
              left: 92,
            }}
          >
            アカウントを登録
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onPressLogin}>
          <Text style={styles.buttonText}>ログイン</Text>
        </Pressable>
      </View>
      {/*</LinearGradient>*/}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  linearGradient: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  Logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },

  text: {
    color: '#FFFFFF',
    fontFamily: '07NikumaruFont',
    letterSpacing: 4,
    padding: 5,
    fontWeight: '500',
    textShadowColor: '#EE695E',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },

  text_ios: {
    fontSize: 18,
  },

  text_android: {
    fontSize: 12,
    elevation: 2,
  },

  form: {
    position: 'absolute',
    left: 0,
    right: 0,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  form_android: {},

  form_ios: {
    marginVertical: 64,
  },

  button: {
    padding: 12,
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonText: {
    padding: 5,
    color: '#818181',
    fontWeight: '800',
    fontSize: 16,
  },
});
