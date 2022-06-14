import React, { memo, useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { CustomInput } from '../Inputs/CustomInput';
import { CustomButton } from '../Inputs/CustomButton';
import { Validation } from '../../validations/Validation';
import { Label } from '../Text/Lable';
import { Footer } from '../layouts/Footer';

export const SignInScreen = memo(() => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const { handleSubmit, control, formState } = useForm({
    mode: 'onChange',
  });

  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: 'サインアップ' }],
  });

  const secondResetAction = CommonActions.reset({
    index: 1,
    routes: [{ name: 'Home' }],
  });

  const onSignInPressed = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await Auth.signIn(data.email, data.password)
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
    navigation.navigate('アカウント登録');
  };

  const onForgotPasswordPress = () => {
    navigation.navigate('再設定メールの送信');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Label text="メールアドレス" />
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
        <Label text="パスワード" />
        <CustomInput
          name="password"
          placeholder={Validation.password.placeholder}
          control={control}
          rules={{
            required: Validation.password.required,
            minLength: {
              value: Validation.password.minLength.value,
              message: Validation.password.minLength.message,
            },
          }}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <CustomButton
            text="ログイン"
            onPress={handleSubmit(onSignInPressed)}
            isVisible={formState.isValid}
            loading={loading}
          />
          <Pressable style={styles.button} onPress={onForgotPasswordPress}>
            <Text style={styles.buttonText}>パスワード忘れた場合</Text>
          </Pressable>
        </View>
      </View>
      <Footer text="アカウントお持ちでない方は" onPress={onSignUpPress} navText="こちら" />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  form: {
    width: '100%',
    padding: 20,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonContainer: {
    marginTop: 30,
  },
  buttonText: {
    color: '#B3B3B3',
    fontWeight: '400',
  },
});
