import React, { memo, useState } from 'react';
import { Text, StyleSheet, View, TextInput, Pressable } from 'react-native';

import { peopleData, stayDaysData, travelPlanData } from 'src/constants/data';
import { GachaTravelColors } from 'src/constants/constants';

import { Label } from 'src/components/Text/Lable';
import { CustomModal } from 'src/components/Modal/CustomModal';

import PrimaryButton from 'src/assets/svg/Button.svg';
import Polygon from 'src/assets/svg/polygon.svg';

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
        <Polygon style={[styles.polygon, styles.polygon1]} />
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
        <Polygon style={[styles.polygon, styles.polygon2]} />
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
        <Polygon style={[styles.polygon, styles.polygon3]} />
        <CustomModal
          modalOpen={modalTravelPlanVisible}
          setModalOpen={setModalTravelPlanVisible}
          value={travelPlan}
          setValue={setTravelPlan}
          items={travelPlanData}
        />
      </View>
      <View style={[styles.form, styles.totalForm]}>
        <Label text="1人1回5,000円" type="secondary" />
        <View style={styles.moneyContainer}>
          <Label text="合計" type="secondary" />
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.moneyText}>{(Number(people.slice(0, 1)) * 5000).toLocaleString()}</Text>
            <Text style={styles.unitText}>円</Text>
          </View>
        </View>
      </View>
      <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('GachaAnimation')}>
        <PrimaryButton />
        <Text style={styles.buttonText}>ガチャを回す</Text>
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: GachaTravelColors.secondaryBgColor,
    flex: 1,
    alignItems: 'center',
  },

  form: {
    width: '80%',
    backgroundColor: GachaTravelColors.mainBgColor,
    borderRadius: 13,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginTop: 16,
  },

  totalForm: {
    marginTop: 72,
    paddingBottom: 32,
  },

  input: {
    height: 40,
    marginTop: 8,
    borderBottomColor: GachaTravelColors.lineColor,
    borderBottomWidth: 2,
    color: GachaTravelColors.mainTextColor,
    fontFamily: 'Noto Sans',
  },

  moneyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: GachaTravelColors.lineColor,
    borderBottomWidth: 2,
    marginTop: 24,
  },

  moneyText: {
    marginTop: 2,
    color: GachaTravelColors.mainTextColor,
    fontWeight: 'bold',
    fontSize: 23,
    fontFamily: 'Noto Sans',
  },

  unitText: {
    marginTop: 16,
    color: GachaTravelColors.mainTextColor,
    fontFamily: 'Noto Sans',
  },

  polygon: {
    position: 'absolute',
    right: 30,
  },

  polygon1: {
    top: 58,
  },

  polygon2: {
    top: 126,
  },

  polygon3: {
    top: 200,
  },

  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonContainer: {
    width: 350,
    height: 90,
    position: 'relative',
    marginTop: 32,
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    fontSize: 24,
    position: 'absolute',
    top: 25,
    left: 95,
  },
});
