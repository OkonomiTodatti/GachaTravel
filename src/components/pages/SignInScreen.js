import React, { memo, useState } from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { CustomInput } from '../Inputs/CustomInput';
import Logo from '../../assets/Logo.png';
import { CustomButton } from '../Inputs/CustomButton';
import { Spinner } from '../Spinner/Spinner';
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

  const thirdResetAction = CommonActions.reset({
    index: 2,
    routes: [{ name: 'ForgotPassword' }],
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
    navigation.dispatch(resetAction);
  };

  const onForgotPasswordPress = () => {
    navigation.navigate('再設定メールの送信');
  };

  return (
    <>
      {loading ? (
        <Spinner size="large" color="#00ff00" />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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
              <CustomButton text="ログイン" onPress={handleSubmit(onSignInPressed)} isVisible={formState.isValid} />
              <Pressable style={styles.button} onPress={onForgotPasswordPress}>
                <Text style={styles.buttonText}>パスワード忘れた場合</Text>
              </Pressable>
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
