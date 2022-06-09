import React, { memo, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { CustomInput } from '../Inputs/CustomInput';
import Logo from '../../assets/Logo.png';
import { CustomButton } from '../Inputs/CustomButton';
import { Spinner } from '../Spinner/Spinner';
import { Validation } from '../../validations/Validation';

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
    navigation.dispatch(thirdResetAction);
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <CustomButton text="ログイン" onPress={handleSubmit(onSignInPressed)} />
              <CustomButton text="サインアップ" onPress={onSignUpPress} />
            </View>
            <CustomButton text="パスワードをお忘れですか?" onPress={onForgotPasswordPress} type="TERTIARY" />
          </View>
        </ScrollView>
      )}
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
