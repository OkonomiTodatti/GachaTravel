import React, { memo, useState } from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { CustomInput } from '../Inputs/CustomInput';
import Logo from '../../assets/Logo.png';
import { CustomButton } from '../Inputs/CustomButton';

export const SignInScreen = memo(() => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const { handleSubmit, control } = useForm({
    mode: 'onSubmit',
  });

  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: 'サインアップ' }],
  });

  const secondResetAction = CommonActions.reset({
    index: 1,
    routes: [{ name: 'Home' }],
  });

  const thirdResetAction = CommonActions.reset({
    index: 2,
    routes: [{ name: 'ForgotPassword' }],
  });

  const onSignInPressed = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const response = await Auth.signIn(data.email, data.password)
        .then(() => {
          setLoading(false);
          navigation.dispatch(secondResetAction);
        })
        .catch((e) => {
          Alert.alert('Oops', e.message);
          setLoading(false);
        });
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  });

  const onSignUpPress = () => {
    navigation.dispatch(resetAction);
  };

  const onForgotPasswordPress = () => {
    navigation.dispatch(thirdResetAction);
  };

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
          rules={{
            required: 'パスワードは必要です',
            minLength: { value: 5, message: '5文字以上のパスワードを入力してください' },
          }}
          secureTextEntry
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <CustomButton text="ログイン" onPress={handleSubmit(onSignInPressed)} />
          <CustomButton text="サインアップ" onPress={onSignUpPress} />
        </View>
        <CustomButton text="パスワードをお忘れですか?" onPress={onForgotPasswordPress} type="TERTIARY" />
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
