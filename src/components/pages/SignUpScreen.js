import React, { memo, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { CustomInput } from '../Inputs/CustomInput';
import Logo from '../../assets/Logo.png';
import { CustomButton } from '../Inputs/CustomButton';
import { Spinner } from '../Spinner/Spinner';
import { Validation } from '../../validations/Validation';

export const SignUpScreen = memo(() => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const { handleSubmit, control } = useForm({
    mode: 'onSubmit',
  });

  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: '認証' }],
  });

  const secondResetAction = CommonActions.reset({
    index: 1,
    routes: [{ name: 'サインイン' }],
  });

  const onSignUpPressed = handleSubmit(async (data) => {
    try {
      if (data.password === data.confirm_password) {
        setLoading(true);
        await Auth.signUp(data.email, data.password)
          .then(() => {
            setLoading(false);
            navigation.dispatch(resetAction);
          })
          .catch((e) => {
            Alert.alert('Oops', e.message);
            setLoading(false);
          });
      } else {
        Alert.alert('パスワードが異なっています', 'もう一度パスワードを入力してください');
      }
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
            <CustomInput
              name="confirm_password"
              placeholder={Validation.confirmPassword.placeholder}
              control={control}
              rules={{
                required: Validation.confirmPassword.required,
                minLength: {
                  value: Validation.confirmPassword.minLength.value,
                  message: Validation.confirmPassword.minLength.message,
                },
              }}
              secureTextEntry
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <CustomButton text="登録" onPress={handleSubmit(onSignUpPressed)} />
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
  Logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  form: {
    alignItems: 'center',
    padding: 20,
  },
});
