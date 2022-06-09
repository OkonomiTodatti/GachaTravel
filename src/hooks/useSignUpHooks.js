import React, { useCallback, useState } from 'react';
import { Auth } from 'aws-amplify';
import { Alert } from 'react-native';

export const useSignUpHooks = () => {
  const [loading, setLoading] = useState(false);
  const signUpHooks = useCallback(async (data) => {
    try {
      if (data.password === data.confirm_password) {
        setLoading(true);
        const response = await Auth.signUp(data.email, data.password)
          .then(() => {
            setLoading(false);
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
  }, []);
  return { signUpHooks, loading };
};
