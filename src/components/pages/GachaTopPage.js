import React, { memo, useEffect } from 'react';
import Background from '../../assets/SBg.svg';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomButton } from '../Inputs/CustomButton';
import Coin from '../../assets/coin.svg';
import Setting from '../../assets/setting.svg';
import ButtonSvg from '../../assets/Button.svg';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser, listStocks, listUsers } from '../../graphql/queries';
import { useLoginUser } from '../../provider/LoginUserProvider';

export const GachaTopPage = memo((props) => {
  const { navigation } = props;

  const { loginUser, setLoginUser } = useLoginUser();

  Auth.currentSession()
    .then((data) => setLoginUser(data.getAccessToken().payload.client_id))
    .catch((err) => console.log(err));

  // console.log(loginUser);
  useEffect(() => {
    fetchUsers();
  }, []);

  let filter = {
    user_id: {
      eq: loginUser, // filter ユーザーID
    },
  };

  async function fetchUsers() {
    try {
      // const data = await API.graphql(graphqlOperation(getUser, { id: loginUser }));
      const data = await API.graphql(graphqlOperation(listStocks, { filter: filter }));
      console.log(data.data.listStocks.items);
    } catch (err) {
      console.log(err);
    }
  }

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
        <CustomButton text="START" onPress={() => navigation.navigate('SettingGacha')} />
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
