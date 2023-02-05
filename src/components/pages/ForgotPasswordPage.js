import React, { memo, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Auth } from 'aws-amplify';
import { useForm } from 'react-hook-form';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Validation } from 'src/validations/Validation';

import { GachaTravelColors } from 'src/constants/constants';

import { Label } from 'src/components/Text/Lable';
import { CustomInput } from 'src/components/Inputs/CustomInput';
import { CustomButton } from 'src/components/Inputs/CustomButton';

export const ForgotPasswordPage = memo(() => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const { handleSubmit, control } = useForm({
    mode: 'onSubmit',
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
        })
        .catch((e) => {
          Alert.alert('Oops', e.message);
          setLoading(false);
        });
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  });

  return (
    <View showsVerticalScrollIndicator={false} style={styles.container}>
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
        <CustomButton text="再設定メールを送信" onPress={handleSubmit(onForgotPasswordPressed)} loading={loading} />
      </View>
    </View>
  );
});

//パスワードを再設定するページ
export const ForgotNewPasswordPage = memo(() => {
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params || '';
  const [loading, setLoading] = useState(false);

  const { handleSubmit, control, formState } = useForm({
    mode: 'onChange',
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
        <Text style={styles.description}>メールアドレスに確認コードを送信しました。</Text>
        <Text style={styles.description}>メールに記載されている確認コードを入力してください</Text>
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
    flex: 1,
    padding: 16,
    backgroundColor: GachaTravelColors.mainBgColor,
  },
  form: {
    padding: 24,
  },

  description: {
    color: GachaTravelColors.secondaryTextColor,
    marginVertical: 8,
    fontWeight: '400',
  },
});
