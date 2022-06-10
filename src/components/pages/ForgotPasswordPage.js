import React, { memo, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { CustomInput } from '../Inputs/CustomInput';
import { CustomButton } from '../Inputs/CustomButton';
import { Auth } from 'aws-amplify';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Validation } from '../../validations/Validation';
import { Label } from '../Text/Lable';

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
          navigation.navigate('パスワード再設定', {
            email: data.email,
          });
          // navigation.dispatch(
          //   CommonActions.reset({
          //     index: 0,
          //     routes: [{ name: 'ForgotNewPassword', params: { email: data.email } }],
          //   }),
          // );
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
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.form}>
        <Label text="メールアドレス" />
        <Text style={styles.description}>パスワードをリセットするために、メールアドレスを入力してください。</Text>
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
        <CustomButton text="メール送信" onPress={handleSubmit(onForgotPasswordPressed)} loading={loading} />
      </View>
    </ScrollView>
  );
});

//パスワードを再設定するページ

export const ForgotNewPasswordPage = memo(() => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params || '';
  const [loading, setLoading] = useState(false);

  const { handleSubmit, control, formState } = useForm({
    mode: 'onChange',
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
          navigation.navigate('ログイン');
        })
        .catch(() => {
          Alert.alert('Oops', 'パスワードを変更することができませんでした');
          setLoading(false);
        });
    } catch (e) {
      Alert.alert('Oops', 'パスワードを変更することができませんでした');
    }
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.form}>
        <Label text="確認コード" />
        <Text>メールアドレスに確認コードを送信しました。</Text>
        <Text>メールに記載されている確認コードを入力してください</Text>
        <CustomInput
          name="code"
          placeholder={Validation.code.placeholder}
          control={control}
          rules={{ required: Validation.code.required }}
        />
        <Label text="新しいパスワード" />
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
        <Label text="新しいパスワード確認" />
        <CustomInput
          name="confirm_new_password"
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
        <CustomButton
          text="パスワードを再設定"
          onPress={handleSubmit(onForgotPasswordPressed)}
          isVisible={formState.isValid}
          loading={loading}
        />
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
    padding: 20,
  },
  Logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  description: {
    letterSpacing: 3,
    lineHeight: 20,
    marginVertical: 5,
    fontWeight: '400',
  },
});
