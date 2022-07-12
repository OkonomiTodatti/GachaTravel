import React, { memo } from 'react';
import { Text, StyleSheet, ImageBackground, View, Platform, TouchableOpacity, Pressable } from 'react-native';
import image from '../../assets/Logo.png';
import Background from '../../assets/bg.svg';
import Logo from '../../assets/Logo.svg';
import Gacha from '../../assets/Gacha.svg';
import { CustomButton } from '../Inputs/CustomButton';
import { CommonActions } from '@react-navigation/native';
import ButtonSvg from '../../assets/StartButton.svg';
import PrimaryButton from '../../assets/Button.svg';

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
        <Text style={[styles.text, styles[`text_${Platform.OS}`]]}>ガチャで旅行先を決められる</Text>
        <Text style={[styles.text, styles[`text_${Platform.OS}`]]}>お得な旅行サポートアプリ</Text>
        <Gacha />
        {/*<CustomButton text="はじめる" onPress={() => navigation.dispatch(resetAction)} />*/}
        <Pressable
          style={{ width: 350, height: 90, position: 'relative' }}
          onPress={() => navigation.dispatch(resetAction)}
        >
          <PrimaryButton />
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Noto Sans',
              fontWeight: 'bold',
              fontSize: 22,
              position: 'absolute',
              top: 38,
              left: 125,
            }}
          >
            はじめる
          </Text>
        </Pressable>
        {/*<TouchableOpacity style={{ position: 'relative',marginTop:50 }}>*/}
        {/*  <ButtonSvg />*/}
        {/*  <Text style={styles.button_text}>はじめる</Text>*/}
        {/*</TouchableOpacity>*/}
      </View>
    </View>
  );
});

export const Details = memo(() => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text>Details</Text>
      </ImageBackground>
    </View>
  );
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   image: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    fontSize: 20,
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
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonText: {
    padding: 5,
    color: '#818181',
    fontWeight: '800',
    fontSize: 16,
  },

  button_text: {
    color: '#FFFFFF',
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Noto Sans',
    top: 20,
    left: 118,
  },
});
