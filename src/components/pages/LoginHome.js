import React, { memo } from 'react';
import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Logo from '../../assets/Logo.png';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from '../Inputs/CustomButton';

export const LoginHome = memo(() => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onPressSignUp = () => {
    navigation.navigate('アカウント登録');
  };

  const onPressLogin = () => {
    navigation.navigate('ログイン');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image source={Logo} style={[styles.Logo, { height: height * 0.3 }]} resizeMode="contain" />
        <Text style={styles.text}>ガチャで旅行先を決められる</Text>
        <Text style={styles.text}>お得な旅行サポートアプリ</Text>
        <CustomButton text="アカウント登録" onPress={onPressSignUp} />
        <CustomButton text="ログイン" onPress={onPressLogin} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  Logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },

  text: {
    color: '#2D2A2A',
    fontSize: 16,
    letterSpacing: 4,
    padding: 5,
    fontWeight: '500',
  },

  form: {
    marginVertical: 80,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
