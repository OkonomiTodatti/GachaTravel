import React, { memo } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Picker } from '@react-native-picker/picker';

export const CustomModal = memo((props) => {
  const { modalOpen, setModalOpen, value, setValue, items } = props;

  const pickerData = (data) => {
    return data?.length > 0 && data.map((val, index) => <Picker.Item label={val} value={val} key={index} />);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalOpen}
      onRequestClose={() => {
        Alert.alert('閉じます');
      }}
    >
      <View style={styles.container}>
        <View style={styles.picker}>
          <View style={styles.text_container}>
            <TouchableOpacity onPressIn={() => setModalOpen(!modalOpen)}>
              <Text style={[styles.text, styles.text_cansel]}>キャンセル</Text>
            </TouchableOpacity>
            <TouchableOpacity onPressIn={() => setModalOpen(!modalOpen)}>
              <Text style={[styles.text, styles.text_decision]}>決定</Text>
            </TouchableOpacity>
          </View>
          <Picker selectedValue={value} onValueChange={(itemValue) => setValue(itemValue)}>
            {pickerData(items)}
          </Picker>
        </View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  picker: {
    backgroundColor: '#fff',
    width: '100%',
    height: '30%',
    position: 'absolute',
    bottom: 0,
  },

  text_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingHorizontal: 15,
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text_cansel: {
    color: '#535353',
  },
  text_decision: {
    color: '#FF654A',
  },
});
