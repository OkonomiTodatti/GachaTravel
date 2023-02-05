import React, { memo, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import { Auth } from 'aws-amplify';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { CustomInput } from 'src/components/Inputs/CustomInput';
import { CustomButton } from 'src/components/Inputs/CustomButton';

import { Validation } from 'src/validations/Validation';

import { Label } from 'src/components/Text/Lable';

export const ConfirmSignUpPage = memo(() => {
  const navigation = useNavigation();
  const route = useRoute();
  const email = route.params || '';
  const [loading, setLoading] = useState(false);

  const { handleSubmit, control } = useForm({
    mode: 'onSubmit',
  });

  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: 'loginHome' }],
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
      Alert.alert('認証コードが違います', e.message);
    }
  });

  return (
    <View showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.form}>
        <Label text="確認コード" />
        <View style={{ marginTop: 10 }}>
          <Text style={styles.description}>メールアドレスに確認コードを送信しました。</Text>
          <Text style={styles.description}>メールに記載されている確認コードを入力してください。</Text>
        </View>
        <CustomInput
          name="code"
          placeholder={Validation.code.placeholder}
          control={control}
          rules={{ required: Validation.code.required }}
        />
        <CustomButton text="アカウント登録" onPress={handleSubmit(onConfirmCode)} loading={loading} />
        <Text style={{ marginTop: 30 }}>
          <Text style={{ color: 'red', borderStyle: 'solid', textDecorationLine: 'underline' }}>利用規約</Text>
          に同意の上、アカウント登録を行ってください
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  Logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  form: {
    padding: 20,
  },
  description: {
    fontWeight: '400',
  },
});
