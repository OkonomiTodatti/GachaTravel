import React, { memo } from 'react';
import { Auth } from 'aws-amplify';
import { Alert, Image, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Logo from '../../assets/Logo.png';
import { CustomInput } from '../Inputs/CustomInput';
import { CustomButton } from '../Inputs/CustomButton';
import { Spinner } from '../Spinner/Spinner';
import { Validation } from '../../validations/Validation';

export const ConfirmSignUpPage = memo(() => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const { handleSubmit, control } = useForm({
    mode: 'onSubmit',
  });

  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: 'サインイン' }],
  });

  const onConfirmCode = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await Auth.confirmSignUp(data.email, data.code)
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

  const onSignUpPress = () => {
    navigation.dispatch(resetAction);
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
              name="code"
              placeholder={Validation.code.placeholder}
              control={control}
              rules={{ required: Validation.code.required }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <CustomButton text="認証" onPress={handleSubmit(onConfirmCode)} />
              <CustomButton text="サインイン" onPress={onSignUpPress} />
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
