import React, { memo, useState } from 'react';
import { Text, StyleSheet, View, TextInput, Pressable } from 'react-native';

import { useRoute } from '@react-navigation/native';
import Modal from 'react-native-modal';

import { Label } from '../Text/Lable';

import PrimaryButton from 'src/assets/svg/Button.svg';
import Polygon from 'src/assets/svg/polygon.svg';
import Cross from 'src/assets/svg/cross.svg';

export const BuyTicketPage = memo(() => {
  const route = useRoute();
  const { prefecture, people } = route.params;
  const [airPlane, setAirPlane] = useState('大阪（KIX - 関西国際空港）');
  const [stayDays, setStayDays] = useState('7月12日(火) ~ 7月14日(木)');
  const [airPlaneClass, setAirPlaneClass] = useState('エコノミークラス');
  const [modalPeopleVisible, setModalPeopleVisible] = useState(false);
  const [modalStayDaysVisible, setModalStayDaysVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.center}>
            <View style={styles.barIcon} />
            <View style={styles.modalTop}>
              <Cross onPress={toggleModal} />
              <Text style={styles.text}>出発地</Text>
            </View>
          </View>
        </View>
      </Modal>
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
          value={people + '人'}
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
        <Pressable style={{ width: 350, height: 90, position: 'relative' }} onPress={toggleModal}>
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
    marginTop: 8,
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 2,
    color: '#777777',
    fontFamily: 'Noto Sans',
  },

  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  flexView: {
    flex: 1,
    backgroundColor: 'white',
  },

  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  modalContent: {
    backgroundColor: '#ffffff',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 780,
    paddingBottom: 20,
  },

  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: '#bbb',
    borderRadius: 3,
  },

  text: {
    color: '#777777',
    fontSize: 16,
    marginTop: 24,
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
  },
});
