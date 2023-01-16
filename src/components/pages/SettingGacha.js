import React, { memo, useState } from 'react';
import { Text, StyleSheet, View, TextInput, Pressable } from 'react-native';
import { Label } from '../Text/Lable';
import { CustomModal } from '../Modal/CustomModal';
import { peopleData, stayDaysData, travelPlanData } from '../data';
import PrimaryButton from '../../assets/Button.svg';
import Polygon from '../../assets/polygon.svg';

export const SettingGacha = memo((props) => {
  const { navigation } = props;
  const [people, setPeople] = useState('1人');
  const [stayDays, setStayDays] = useState('1日');
  const [travelPlan, setTravelPlan] = useState('記念館巡り');
  const [modalPeopleVisible, setModalPeopleVisible] = useState(false);
  const [modalStayDaysVisible, setModalStayDaysVisible] = useState(false);
  const [modalTravelPlanVisible, setModalTravelPlanVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Label text="人数" type="secondary" />
        <TextInput
          style={styles.input}
          value={people}
          onChangeText={setPeople}
          keyboardType="numeric"
          editable={false}
          selectTextOnFocus={false}
          onPressIn={() => setModalPeopleVisible(!modalPeopleVisible)}
        />
        <Polygon style={{ position: 'absolute', top: 50, right: 30 }} />
        <CustomModal
          modalOpen={modalPeopleVisible}
          setModalOpen={setModalPeopleVisible}
          value={people}
          setValue={setPeople}
          items={peopleData}
        />
        <View style={styles.labelContainer}>
          <Label text="宿泊日数" type="secondary" />
          <Label text="任意" type="secondary" />
        </View>
        <TextInput
          style={styles.input}
          value={stayDays}
          onChangeText={setStayDays}
          keyboardType="numeric"
          editable={false}
          selectTextOnFocus={false}
          onPressIn={() => setModalStayDaysVisible(!modalStayDaysVisible)}
        />
        <Polygon style={{ position: 'absolute', top: 116, right: 30 }} />
        <CustomModal
          modalOpen={modalStayDaysVisible}
          setModalOpen={setModalStayDaysVisible}
          value={stayDays}
          setValue={setStayDays}
          items={stayDaysData}
        />
        <View style={styles.labelContainer}>
          <Label text="旅行名" type="secondary" />
          <Label text="任意" type="secondary" />
        </View>
        <TextInput
          style={styles.input}
          value={travelPlan}
          onChangeText={setTravelPlan}
          keyboardType="numeric"
          editable={false}
          selectTextOnFocus={false}
          onPressIn={() => setModalTravelPlanVisible(!modalTravelPlanVisible)}
        />
        <Polygon style={{ position: 'absolute', top: 179, right: 30 }} />
        <CustomModal
          modalOpen={modalTravelPlanVisible}
          setModalOpen={setModalTravelPlanVisible}
          value={travelPlan}
          setValue={setTravelPlan}
          items={travelPlanData}
        />
      </View>
      <View style={[styles.form, { marginTop: 70, paddingBottom: 30 }]}>
        <Label text="1人1回5,000円" type="secondary" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomColor: '#EDEDED',
            borderBottomWidth: 2,
            marginTop: 20,
          }}
        >
          <Label text="合計" type="secondary" />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginTop: 2, color: '#777777', fontWeight: 'bold', fontSize: 23, fontFamily: 'Noto Sans' }}>
              {(Number(people.slice(0, 1)) * 5000).toLocaleString()}
            </Text>
            <Text style={{ marginTop: 14, color: '#777777', fontFamily: 'Noto Sans' }}>円</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        {/*<CustomButton text="はじめる" onPress={() => navigation.navigate('GachaAnimation')} />*/}
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
              top: 36,
              left: 95,
            }}
          >
            ガチャを回す
          </Text>
        </Pressable>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#F1F2EB',
    flex: 1,
    alignItems: 'center',
  },

  form: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 13,
    paddingVertical: 13,
    paddingHorizontal: 16,
    marginTop: 10,
  },

  input: {
    height: 40,
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
