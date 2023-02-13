import React, { memo, useEffect, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { API, Auth, graphqlOperation } from 'aws-amplify';

import { listStocks } from 'src/graphql/queries';

import { useLoginUser } from 'src/provider/LoginUserProvider';

import { GachaTravelColors } from 'src/constants/constants';

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

  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.settingContainer}>
        <TouchableOpacity>
          <Setting />
        </TouchableOpacity>
      </View>
      <View style={styles.moneyContainer}>
        <Coin />
        <Text style={styles.moneyText}>5000</Text>
      </View>
      <View style={[styles.form, styles[`form_${Platform.OS}`]]}>
        <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('SettingGacha')}>
          <StartButton />
        </Pressable>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GachaTravelColors.mainBgColor,
  },

  buttonContainer: {
    width: 350,
    height: 90,
    position: 'relative',
  },

  form: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 85,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 80,
    right: 20,
  },

  moneyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 190,
    left: 15,
  },

  moneyText: {
    position: 'absolute',
    left: 30,
    fontWeight: 'bold',
    fontSize: 18,
    top: 2,
  },
});
