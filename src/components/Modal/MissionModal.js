import React, { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import Light from 'src/assets/svg/light.svg';
import Mission from 'src/assets/svg/mission.svg';
import PeGrid from 'src/assets/svg/Pegrid.svg';
import MissionBack from 'src/assets/svg/mission_back.svg';
import PageButton from 'src/assets/svg/mission_arrow.svg';

export const MissionModal = memo((props) => {
  const { nextButton = false, onPressUp, onPressDown, type = 'primary' } = props;
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
          ミッション
        </Text>
        <View
          nativeID="modal_wrap_content"
          style={{
            backgroundColor: '#fff',
            paddingTop: 25,
            borderBottomEndRadius: 35,
            borderBottomStartRadius: 35,
            paddingBottom: 25,
          }}
        >
          <PeGrid style={{ position: 'absolute' }} />
          <View nativeID="modal_wrap_inner" style={{ height: 335 }}>
            <View
              nativeID="mission_wrap"
              style={{
                width: '80%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <MissionBack />
              <View nativeID="mission_detail" style={{ position: 'absolute', top: 30, left: 30 }}>
                <Text style={{ color: '#ac8bd6', fontSize: 17, fontWeight: 'bold', fontFamily: 'Noto Sans' }}>
                  ルートに掲載しているお店
                </Text>
                <Text
                  style={{ color: '#ac8bd6', fontSize: 17, fontWeight: 'bold', fontFamily: 'Noto Sans', marginTop: 10 }}
                >
                  をインスタに投稿しよう！
                </Text>
              </View>
            </View>
            <Text
              nativeID="mission_txt"
              style={{
                color: '#777',
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 19,
                fontFamily: 'Noto Sans',
              }}
            >
              おすすめのルートに掲載している
            </Text>
            <Text
              style={{
                color: '#777',
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'center',
                fontFamily: 'Noto Sans',
                marginTop: 3,
              }}
            >
              お店をインスタに投稿すると、
            </Text>
            <Text
              style={{
                color: '#777',
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'center',
                fontFamily: 'Noto Sans',
                marginTop: 3,
              }}
            >
              そのお店のクーポンがもらえるよ！
            </Text>
            <View style={{ marginTop: 20, marginLeft: 'auto', marginRight: 'auto' }}>
              <Mission />
            </View>
            {nextButton ? (
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                <Pressable onPress={onPressDown}>
                  <PageButton />
                </Pressable>
                <View
                  style={{
                    backgroundColor: '#ac8bd6',
                    borderWidth: 1,
                    borderColor: '#8761b7',
                    borderRadius: 5,
                    marginTop: 6,
                    height: 30,
                    shadowColor: '#8761b7',
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
                    3/6
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
    marginTop: 20,
  },

  card: {
    backgroundColor: '#ac8bd6',
    borderColor: '#8761b7',
    borderWidth: 3,
    paddingHorizontal: 3,
    paddingBottom: 3,
    borderRadius: 40,
    position: 'relative',
  },
});
