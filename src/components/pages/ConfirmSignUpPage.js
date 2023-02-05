import React, { memo, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import { Auth } from 'aws-amplify';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { GachaTravelColors } from 'src/constants/constants';

import { CustomInput } from 'src/components/Inputs/CustomInput';
import { CustomButton } from 'src/components/Inputs/CustomButton';
import { Label } from 'src/components/Text/Lable';

import { Validation } from 'src/validations/Validation';

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
        <Text style={styles.description}>メールアドレスに確認コードを送信しました。</Text>
        <Text style={styles.description}>メールに記載されている確認コードを入力してください。</Text>
        <CustomInput
          name="code"
          placeholder={Validation.code.placeholder}
          control={control}
          rules={{ required: Validation.code.required }}
        />
        <CustomButton text="アカウント登録" onPress={handleSubmit(onConfirmCode)} loading={loading} />
        <Text style={styles.usageRecordText}>
          <Text style={styles.usageRecordSpanText}>利用規約</Text>
          に同意の上、アカウント登録を行ってください
        </Text>
      </View>
    </View>
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

  usageRecordText: {
    marginTop: 32,
  },

  usageRecordSpanText: {
    color: GachaTravelColors.usageRecordTextColor,
    borderStyle: 'solid',
    textDecorationLine: 'underline',
  },
});
