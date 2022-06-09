import React, { memo, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { CustomInput } from '../Inputs/CustomInput';
import Logo from '../../assets/Logo.png';
import { CustomButton } from '../Inputs/CustomButton';
import { Spinner } from '../Spinner/Spinner';

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
        const response = await Auth.signUp(data.email, data.password)
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
  const onForgotPassWordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

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
              rules={{ required: 'パスワードは必要です' }}
              secureTextEntry
            />
            <CustomInput
              name="confirm_password"
              placeholder="もう一度入力してください"
              control={control}
              rules={{ required: '比較パスワードは必要です' }}
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
