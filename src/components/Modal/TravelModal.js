import React, { memo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Light from '../../assets/light.svg';
import Japan from '../../assets/japan.svg';
import BGrid from '../../assets/Bgrid.svg';
import PageButton from '../../assets/travel_arrow.svg';
import { data } from '../../data';

export const TravelModal = memo((props) => {
  const {
    nextButton = false,
    onPressUp,
    onPressDown,
    type = 'primary',
    prefectureId = 1,
    prefecture = '北海道',
  } = props;
  // let flag = Math.floor(Math.random() * (3 + 1 - 1)) + 1;
  return (
    <View style={[styles[`container_${type}`]]}>
      <View style={styles.card}>
        <Light style={{ top: 10, left: 20, position: 'absolute' }} />
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 23,
            fontWeight: 'bold',
            marginHorizontal: 14,
            padding: 18,
            fontFamily: 'Noto Sans',
          }}
        >
          旅行先
        </Text>
        <View
          nativeID="modal_wrap_content"
          style={{
            backgroundColor: '#fff',
            paddingTop: 40,
            borderBottomEndRadius: 35,
            borderBottomStartRadius: 35,
            paddingBottom: 10,
          }}
        >
          <BGrid style={{ position: 'absolute' }} />
          <View nativeID="modal_wrap_inner" style={{ height: 335 }}>
            <View
              nativeID="place_wrap"
              style={{
                width: '70%',
                backgroundColor: '#f4fdfd',
                borderRadius: 12,
                marginLeft: 'auto',
                marginRight: 'auto',
                borderColor: '#20bdbd',
                borderWidth: 4,
              }}
            >
              <View nativeID="place_name">
                <Text style={{ color: '#20bdbd', fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>
                  {data[prefectureId].kana}
                </Text>
                <Text style={{ color: '#20bdbd', fontSize: 35, fontWeight: 'bold', textAlign: 'center' }}>
                  {/*{data[flag].prefecture}*/}
                  {prefecture}
                </Text>
              </View>
            </View>
            <Text style={{ color: '#777', fontSize: 17, fontWeight: 'bold', textAlign: 'center', marginTop: 18 }}>
              旅行先は{data[prefectureId].prefecture}です！
            </Text>
            <View style={{ marginTop: 40, marginLeft: 'auto', marginRight: 'auto' }}>
              <Japan />
            </View>
            {nextButton ? (
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
                <Pressable onPress={onPressDown}>
                  <PageButton />
                </Pressable>
                <View
                  style={{
                    backgroundColor: '#20bdbd',
                    borderWidth: 1,
                    borderColor: '#137878',
                    borderRadius: 5,
                    marginTop: 6,
                    height: 30,
                    shadowColor: '#137878',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 0,
                    elevation: 1,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#fff',
                      paddingHorizontal: 14,
                      lineHeight: 26,
                      fontWeight: 'bold',
                      letterSpacing: 3,
                      fontFamily: 'Noto Sans',
                    }}
                  >
                    1/6
                  </Text>
                </View>
                <Pressable onPress={onPressUp}>
                  <PageButton style={{ transform: [{ rotate: '60deg' }] }} />
                </Pressable>
              </View>
            ) : (
              <View></View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container_primary: {
    marginTop: 0,
  },

  container_detail: {
    marginTop: 10,
  },

  card: {
    backgroundColor: '#20bdbd',
    borderColor: '#137878',
    borderWidth: 3,
    paddingHorizontal: 3,
    paddingBottom: 3,
    borderRadius: 40,
    position: 'relative',
  },
});
