import React, { memo, useState } from 'react';
import { Text, StyleSheet, View, TextInput, Pressable } from 'react-native';

import { useRoute } from '@react-navigation/native';
import Modal from 'react-native-modal';

import { GachaTravelColors } from 'src/constants/constants';

import { Label } from 'src/components/Text/Lable';

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
        <Polygon style={[styles.polygon, styles.polygon1]} />
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
        <Polygon style={[styles.polygon, styles.polygon2]} />
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
        <Polygon style={[styles.polygon, styles.polygon3]} />
      </View>
      <Pressable style={styles.buttonContainer} onPress={toggleModal}>
        <PrimaryButton />
        <Text style={styles.buttonText}>フライトを検索</Text>
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GachaTravelColors.secondaryBgColor,
    flex: 1,
    alignItems: 'center',
  },

  form: {
    width: '80%',
    backgroundColor: GachaTravelColors.collectionCardBgColor,
    borderRadius: 13,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginTop: 48,
  },

  input: {
    height: 40,
    marginTop: 8,
    borderBottomColor: GachaTravelColors.lineColor,
    borderBottomWidth: 2,
    color: GachaTravelColors.mainTextColor,
    fontFamily: 'Noto Sans',
  },

  buttonContainer: {
    width: 350,
    height: 90,
    marginTop: 56,
    position: 'relative',
  },

  buttonText: {
    color: GachaTravelColors.mainButtonTextColor,
    fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    fontSize: 24,
    position: 'absolute',
    top: 25,
    left: 90,
  },

  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  flexView: {
    flex: 1,
    backgroundColor: GachaTravelColors.mainBgColor,
  },

  polygon: {
    position: 'absolute',
    right: 30,
  },

  polygon1: {
    top: 60,
  },

  polygon2: {
    top: 200,
  },

  polygon3: {
    top: 345,
  },

  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  modalContent: {
    backgroundColor: GachaTravelColors.mainBgColor,
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
    backgroundColor: GachaTravelColors.bottomModalBgColor,
    borderRadius: 3,
  },

  text: {
    color: GachaTravelColors.mainTextColor,
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
