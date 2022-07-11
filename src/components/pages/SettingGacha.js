import React, { memo, useCallback, useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { Label } from '../Text/Lable';
import { CustomButton } from '../Inputs/CustomButton';
import { CustomModal } from '../Modal/CustomModal';
import { peopleData, stayDaysData, travelPlanData } from '../data';

export const SettingGacha = memo((props) => {
  const { navigation } = props;
  const [people, setPeople] = useState('1人');
  const [stayDays, setStayDays] = useState('1日');
  const [travelPlan, setTravelPlan] = useState('夏旅行');
  const [modalPeopleVisible, setModalPeopleVisible] = useState(false);
  const [modalStayDaysVisible, setModalStayDaysVisible] = useState(false);
  const [modalTravelPlanVisible, setModalTravelPlanVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Label text="人数" type="secondary" />
        <TextInput
          style={{ height: 40, borderBottomColor: '#EDEDED', borderBottomWidth: 2, color: '#777777' }}
          value={people}
          onChangeText={setPeople}
          keyboardType="numeric"
          onPressIn={() => setModalPeopleVisible(!modalPeopleVisible)}
        />
        <CustomModal
          modalOpen={modalPeopleVisible}
          setModalOpen={setModalPeopleVisible}
          value={people}
          setValue={setPeople}
          items={peopleData}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Label text="宿泊日数" type="secondary" />
          <Label text="任意" type="secondary" />
        </View>
        <TextInput
          style={{ height: 40, borderBottomColor: '#EDEDED', borderBottomWidth: 2, color: '#777777' }}
          value={stayDays}
          onChangeText={setStayDays}
          keyboardType="numeric"
          onPressIn={() => setModalStayDaysVisible(!modalStayDaysVisible)}
        />
        <CustomModal
          modalOpen={modalStayDaysVisible}
          setModalOpen={setModalStayDaysVisible}
          value={stayDays}
          setValue={setStayDays}
          items={stayDaysData}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Label text="旅行名" type="secondary" />
          <Label text="任意" type="secondary" />
        </View>
        <TextInput
          style={{ height: 40, borderBottomColor: '#EDEDED', borderBottomWidth: 2, color: '#777777' }}
          value={travelPlan}
          onChangeText={setTravelPlan}
          keyboardType="numeric"
          onPressIn={() => setModalTravelPlanVisible(!modalTravelPlanVisible)}
        />
        <CustomModal
          modalOpen={modalTravelPlanVisible}
          setModalOpen={setModalTravelPlanVisible}
          value={travelPlan}
          setValue={setTravelPlan}
          items={travelPlanData}
        />
      </View>

      <View style={[styles.form, { marginTop: 70, paddingBottom: 30 }]}>
        <Label text="1人1回5000円" type="secondary" />
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
            <Text style={{ marginTop: 5, color: '#777777', fontWeight: 'bold', fontSize: 23 }}>
              {Number(people.slice(0, 1)) * 5000}
            </Text>
            <Text style={{ marginTop: 14, color: '#777777' }}>円</Text>
          </View>
        </View>
      </View>
      <View style={{ width: '80%', marginTop: 30 }}>
        <CustomButton text="はじめる" onPress={() => navigation.navigate('GachaAnimation')} />
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
});
