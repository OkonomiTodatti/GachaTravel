import React, { memo, useState } from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { CustomInput } from '../Inputs/CustomInput';
import Logo from '../../assets/Logo.png';
import { CustomButton } from '../Inputs/CustomButton';

export const Test = memo(() => {
  const { height } = useWindowDimensions();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const onPressButton = () => console.log(1);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.form}>
        <Image source={Logo} style={[styles.Logo, { height: height * 0.3 }]} resizeMode="contain" />
        <CustomInput
          name="email"
          placeholder="メールを入力してください"
          control={control}
          rules={{
            required: 'メールは必要です',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: '正しい形式で入力してください',
            },
          }}
        />
        <CustomInput
          name="password"
          placeholder="パスワードを入力してください"
          control={control}
          rules={{ required: 'パスワードは必要です' }}
          secureTextEntry
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {/*<Button title="Submit" onPress={handleSubmit(onSignInPressed)} />*/}
          <CustomButton text="サインイン" onPress={onPressButton} />
          <CustomButton text="サインアップ" onPress={onPressButton} />
        </View>
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  form: {
    alignItems: 'center',
    padding: 20,
  },
  Logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});
