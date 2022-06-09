import React, { memo, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import Logo from '../../assets/Logo.png';
import { CustomInput } from '../Inputs/CustomInput';
import { CustomButton } from '../Inputs/CustomButton';
import { Auth } from 'aws-amplify';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Spinner } from '../Spinner/Spinner';

export const ForgotPasswordPage = memo(() => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const { handleSubmit, control } = useForm({
    mode: 'onSubmit',
  });

  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: 'ForgotNewPassword' }],
  });

  const secondResetAction = CommonActions.reset({
    index: 1,
    routes: [{ name: 'サインイン' }],
  });

  const onForgotPasswordPressed = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const response = await Auth.forgotPassword(data.email)
        .then(() => {
          setLoading(false);
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'ForgotNewPassword', params: { email: data.email } }],
            }),
          );
        })
        .catch((e) => {
          Alert.alert('Oops', e.message);
          setLoading(false);
        });
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  });

  const onSignInPress = () => {
    navigation.dispatch(secondResetAction);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <CustomButton text="メール送信" onPress={handleSubmit(onForgotPasswordPressed)} />
              <CustomButton text="サインイン" onPress={onSignInPress} />
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
});

//パスワードを再設定するページ

export const ForgotNewPasswordPage = memo(() => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params || '';
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: 'サインイン' }],
  });

  const onForgotPasswordPressed = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const response = await Auth.forgotPasswordSubmit(email, data.code, data.new_password)
        .then(() => {
          setLoading(false);
          navigation.dispatch(resetAction);
        })
        .catch((e) => {
          Alert.alert('Oops', 'パスワードを変更することができませんでした');
          setLoading(false);
        });
    } catch (e) {
      Alert.alert('Oops', 'パスワードを変更することができませんでした');
    }
  });

  const onSignInPress = () => {
    navigation.dispatch(resetAction);
  };

  return (
    <>
      {loading ? (
        <Spinner size="large" color="#00ff00" />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
          <View style={styles.form}>
            <Image source={Logo} style={[styles.Logo, { height: height * 0.3 }]} resizeMode="contain" />
            <CustomInput
              name="code"
              placeholder="認証コードを入力してください"
              control={control}
              rules={{ required: '認証コードは必要です' }}
              secureTextEntry
            />
            <CustomInput
              name="new_password"
              placeholder="新しいパスワードを入力してください"
              control={control}
              rules={{ required: '新しいパスワードが必要です' }}
              secureTextEntry
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <CustomButton text="パスワード変更" onPress={handleSubmit(onForgotPasswordPressed)} />
              <CustomButton text="サインイン" onPress={onSignInPress} />
            </View>
          </View>
        </ScrollView>
      )}
    </>
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
