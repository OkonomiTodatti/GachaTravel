import React, { memo, useState } from 'react';
import { Alert, Button, Image, ScrollView, Text, TextInput, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { CustomInput } from '../Inputs/CustomInput';
import { SignUp } from 'aws-amplify-react-native/dist/Auth';

export const SignScreen = memo(() => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const onSignInPressed = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const response = await Auth.signIn(data.email, data.password);
      // Alert.alert(response);
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
    // navigation.navigate('Home');
  });

  const onSubmit = (params) => {
    console.log(params);
  };

  const onForgotPassWordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CustomInput
        name="email"
        placeholder="メールを入力してください"
        control={control}
        rules={{ required: 'メールは必要です' }}
      />
      <CustomInput
        name="password"
        placeholder="パスワードを入力してください"
        control={control}
        rules={{ required: 'パスワードは必要です' }}
        secureTextEntry
      />

      <Button title="Submit" onPress={handleSubmit(onSignInPressed)} />
      <Button title="アラート" onPress={onSignUpPress} />
    </ScrollView>
  );
});
