import React, { memo, useState } from 'react';
import { Text, StyleSheet, View, TextInput, Pressable } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { Label } from '../Text/Lable';

import PrimaryButton from '../../assets/svg/Button.svg';
import Polygon from '../../assets/svg/polygon.svg';

export const BuyTicketPage = memo((props) => {
  const { navigation } = props;
  const route = useRoute();
  const { prefecture,people} = route.params
  const [airPlane, setAirPlane] = useState('大阪（KIX - 関西国際空港）');
  const [stayDays, setStayDays] = useState('7月12日(火) ~ 7月14日(木)');
  const [airPlaneClass, setAirPlaneClass] = useState('エコノミークラス');
  const [modalPeopleVisible, setModalPeopleVisible] = useState(false);
  const [modalStayDaysVisible, setModalStayDaysVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Label text="出発地" type="secondary" />
        <TextInput
          style={styles.input}
          value={airPlane}
          onChangeText={setAirPlane}
          editable={false}
          selectTextOnFocus={false}
          onPressIn={() => setModalPeopleVisible(!modalPeopleVisible)}
        />
        <Polygon style={{ position: 'absolute', top: 60, right: 30 }} />
        <Label text="目的地" type="secondary" />
        <TextInput
          style={styles.input}
          value={prefecture}
          editable={false}
          selectTextOnFocus={false}
          onPressIn={() => setModalStayDaysVisible(!modalStayDaysVisible)}
        />
        <Label text="日程" type="secondary" />
        <TextInput
          style={styles.input}
          value={stayDays}
          onChangeText={setStayDays}
          editable={false}
          selectTextOnFocus={false}
          onPressIn={() => setModalStayDaysVisible(!modalStayDaysVisible)}
        />
        <Polygon style={{ position: 'absolute', top: 200, right: 30 }} />
        <Label text="人数" type="secondary" />
        <TextInput
          style={styles.input}
          value={people+"人"}
          editable={false}
          selectTextOnFocus={false}
          onPressIn={() => setModalStayDaysVisible(!modalStayDaysVisible)}
        />
        <Label text="ご希望のクラス" type="secondary" />
        <TextInput
          style={styles.input}
          value={airPlaneClass}
          onChangeText={setAirPlaneClass}
          keyboardType="numeric"
          editable={false}
          selectTextOnFocus={false}
          onPressIn={() => setModalStayDaysVisible(!modalStayDaysVisible)}
        />
        <Polygon style={{ position: 'absolute', top: 345, right: 30 }} />
      </View>
      <View style={{ marginTop: 56 }}>
        <Pressable
          style={{ width: 350, height: 90, position: 'relative' }}
          onPress={() => navigation.navigate('GachaAnimation')}
        >
          <PrimaryButton />
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Noto Sans',
              fontWeight: 'bold',
              fontSize: 24,
              position: 'absolute',
              top: 25,
              left: 90,
            }}
          >
            フライトを検索
          </Text>
        </Pressable>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#F1F2EB',
    flex: 1,
    alignItems: 'center',
  },

  form: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 13,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginTop: 48,
  },

  input: {
    height: 40,
    marginTop:8,
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 2,
    color: '#777777',
    fontFamily: 'Noto Sans',
  },

  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
