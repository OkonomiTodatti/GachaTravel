import React, { memo, useEffect, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { API, Auth, graphqlOperation } from 'aws-amplify';

import { getUser, listStocks, listUsers } from 'src/graphql/queries';

import { useLoginUser } from 'src/provider/LoginUserProvider';

import Background from 'src/assets/svg/SBg.svg';
import Coin from 'src/assets/svg/coin.svg';
import Setting from 'src/assets/svg/setting.svg';
import StartButton from 'src/assets/svg/StartButton.svg';

export const GachaTopPage = memo((props) => {
  const { navigation } = props;

  const { loginUser, setLoginUser } = useLoginUser();
  const [data, setData] = useState();

  Auth.currentSession()
    .then((data) => setLoginUser(data.getAccessToken().payload.client_id))
    .catch((err) => console.log(err));

  useEffect(() => {
    // fetchUsers();
  }, []);

  let filter = {
    user_id: {
      eq: loginUser, // filter ユーザーID
    },
  };

  async function fetchUsers() {
    try {
      const data = await API.graphql(graphqlOperation(listStocks, { filter: filter }));
      setData(data.data.listStocks.items);
    } catch (err) {
      console.log(err);
    }
  }

  console.log(loginUser);

  return (
    <View style={styles.container}>
      <Background />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', top: 80, right: 20 }}>
        <TouchableOpacity>
          <Setting />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', top: 190, left: 15 }}>
        <Coin />
        <Text style={{ position: 'absolute', left: 30, fontWeight: 'bold', fontSize: 18, top: 2 }}>5000</Text>
      </View>
      <View style={[styles.form, styles[`form_${Platform.OS}`]]}>
        <Pressable
          style={{ width: 350, height: 90, position: 'relative' }}
          onPress={() => navigation.navigate('SettingGacha')}
        >
          <StartButton />
        </Pressable>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  form: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 85,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
