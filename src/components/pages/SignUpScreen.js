import React, { memo, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
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

  const { handleSubmit, control, formState } = useForm({
    mode: 'onChange',
  });

  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: '認証' }],
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

  return (
    <>
      {loading ? (
        <Spinner size="large" color="#00ff00" />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
          <View style={styles.form}>
            <Text style={styles.text}>メールアドレス</Text>
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
            <Text style={styles.text}>パスワード</Text>
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
            <Text style={styles.text}>パスワード確認</Text>
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
            <View style={{ marginTop: 45 }}>
              <CustomButton
                text="確認コードを送信"
                onPress={handleSubmit(onSignUpPressed)}
                isVisible={formState.isValid}
              />
            </View>
            <Text style={{ marginTop: 30 }}>
              <Text style={{ color: 'red', borderStyle: 'solid' }}>利用規約</Text>
              に同意の上、アカウント登録を行ってください
            </Text>
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
  text: {
    color: '#2D2A2A',
    fontSize: 16,
    letterSpacing: 4,
    fontWeight: '800',
    alignItems: 'flex-start',
    marginTop: 10,
  },
});
