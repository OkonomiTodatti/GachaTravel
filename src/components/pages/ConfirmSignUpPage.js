import React, { memo } from 'react';
import { Auth } from 'aws-amplify';
import { Alert, Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Logo from '../../assets/Logo.png';
import { CustomInput } from '../Inputs/CustomInput';
import { CustomButton } from '../Inputs/CustomButton';
import { Spinner } from '../Spinner/Spinner';
import { Validation } from '../../validations/Validation';
import { Label } from '../Text/Lable';

export const ConfirmSignUpPage = memo(() => {
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
    routes: [{ name: 'ログイン' }],
  });

  const onConfirmCode = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await Auth.confirmSignUp(email, data.code)
        .then(() => {
          setLoading(false);
          navigation.dispatch(resetAction);
        })
        .catch((e) => {
          Alert.alert('Oops', e.message);
          setLoading(false);
        });
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  });

  // const onSignUpPress = () => {
  //   navigation.dispatch(resetAction);
  // };

  return (
    <>
      {loading ? (
        <Spinner size="large" color="#00ff00" />
      ) : (
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
            <CustomInput
              name="code"
              placeholder={Validation.code.placeholder}
              control={control}
              rules={{ required: Validation.code.required }}
            />
            <CustomButton text="アカウント登録" onPress={handleSubmit(onConfirmCode)} />
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
