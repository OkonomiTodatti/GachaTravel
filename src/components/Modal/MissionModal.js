import React, { memo } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import Light from '../../assets/light.svg';
import Mission from '../../assets/mission.svg';
import PeGrid from '../../assets/Pegrid.svg';
import MissionBack from '../../assets/mission_back.svg';

export const MissionModal = memo(() => {
  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          backgroundColor: '#ac8bd6',
          borderColor: '#8761b7',
          borderWidth: 3,
          paddingHorizontal: 3,
          paddingBottom: 3,
          borderRadius: 40,
          position: 'relative',
        }}
      >
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
          </View>
        </View>
      </View>
    </View>
  );
});
