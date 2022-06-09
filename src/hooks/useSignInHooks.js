import React, { useCallback, useState } from 'react';
import { Auth } from 'aws-amplify';
import { Alert } from 'react-native';

export const useSignInHooks = () => {
  const [loading, setLoading] = useState(false);
  const signInHooks = useCallback(async (data) => {
    try {
      setLoading(true);
      const response = await Auth.signIn(data.email, data.password)
        .then(() => {
          setLoading(false);
        })
        .catch((e) => {
          Alert.alert('Oops', e.message);
          setLoading(false);
        });
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    // navigation.dispatch(secondResetAction);
  }, []);
  return { signInHooks, loading };
};
