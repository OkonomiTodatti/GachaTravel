import React, { memo } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import Light from '../../assets/light.svg';
import Ticket from '../../assets/ticket.svg';
import YGrid from '../../assets/Ygrid.svg';
import TicketBack from '../../assets/ticket_back.svg';

export const MemoryModal = memo(() => {
  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          backgroundColor: '#ea9c3b',
          borderColor: '#bb7e31',
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
          その地の思い出
        </Text>
        <View
          nativeID="modal_wrap_content"
          style={{
            backgroundColor: '#fff',
            paddingTop: 35,
            borderBottomEndRadius: 35,
            borderBottomStartRadius: 35,
            paddingBottom: 15,
          }}
        >
          <YGrid style={{ position: 'absolute' }} />
          <View nativeID="modal_wrap_inner" style={{ height: 335 }}>
            <View
              nativeID="memory_wrap"
              style={{
                width: '70%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {/*<FlatList data={} renderItem={}/>*/}
              {/*<Image*/}
              {/*  source={{*/}
              {/*    uri: 'https://reactnative.dev/img/tiny_logo.png',*/}
              {/*  }}*/}
              {/*/>*/}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
});
