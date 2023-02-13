import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';

import { Auth } from 'aws-amplify';

export const useSignInHooks = () => {
  const [loading, setLoading] = useState(false);
  const signInHooks = useCallback(async (data) => {
    try {
      setLoading(true);
      await Auth.signIn(data.email, data.password)
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
