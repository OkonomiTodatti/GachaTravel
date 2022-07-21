import React, { memo } from 'react';
import { Text, View } from 'react-native';
import Light from '../../assets/light.svg';
import Japan from '../../assets/japan.svg';
import BGrid from '../../assets/Bgrid.svg';
import { ResultTag } from '../Gacha/ResultTag';

export const TravelModal = memo((props) => {
  const { nextButton } = props;
  return (
    <View>
      <View
        style={{
          marginTop: 5,
          backgroundColor: '#20bdbd',
          borderColor: '#137878',
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
                  NAGASAKI
                </Text>
                <Text style={{ color: '#20bdbd', fontSize: 35, fontWeight: 'bold', textAlign: 'center' }}>長崎県</Text>
              </View>
            </View>
            <Text style={{ color: '#777', fontSize: 17, fontWeight: 'bold', textAlign: 'center', marginTop: 18 }}>
              旅行先は長崎県です！
            </Text>
            <View style={{ marginTop: 40, marginLeft: 'auto', marginRight: 'auto' }}>
              <Japan />
            </View>
            {nextButton ? <View style={{ height: 200 }}></View> : <View></View>}
          </View>
        </View>
      </View>
    </View>
  );
});
