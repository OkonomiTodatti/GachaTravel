import React, { memo, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import Logo from '../../assets/Logo.png';
import { CustomInput } from '../Inputs/CustomInput';
import { CustomButton } from '../Inputs/CustomButton';
import { Auth } from 'aws-amplify';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Spinner } from '../Spinner/Spinner';
import { Validation } from '../../validations/Validation';

export const ForgotPasswordPage = memo(() => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const { handleSubmit, control } = useForm({
    mode: 'onSubmit',
  });

  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: 'サインイン' }],
  });

  const onForgotPasswordPressed = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await Auth.forgotPassword(data.email)
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
              name="email"
              placeholder={Validation.email.placeholder}
              control={control}
              rules={{
                required: Validation.email.required,
                pattern: {
                  value: Validation.email.validation,
                  message: Validation.email.message,
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

  const { handleSubmit, control } = useForm({
    mode: 'onSubmit',
  });

  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: 'サインイン' }],
  });

  const onForgotPasswordPressed = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await Auth.forgotPasswordSubmit(email, data.code, data.new_password)
        .then(() => {
          setLoading(false);
          navigation.dispatch(resetAction);
        })
        .catch(() => {
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
              placeholder={Validation.code.placeholder}
              control={control}
              rules={{ required: Validation.code.required }}
            />
            <CustomInput
              name="new_password"
              placeholder={Validation.newPassword.placeholder}
              control={control}
              rules={{
                required: Validation.newPassword.required,
                minLength: {
                  value: Validation.newPassword.minLength.value,
                  message: Validation.newPassword.minLength.message,
                },
              }}
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
