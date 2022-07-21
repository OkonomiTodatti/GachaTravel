import React, { memo } from 'react';
import { Text, View } from 'react-native';
import Light from '../../assets/light.svg';
import Ticket from '../../assets/ticket.svg';
import RGrid from '../../assets/Rgrid.svg';
import TicketBack from '../../assets/ticket_back.svg';

export const TicketModal = memo(() => {
  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          backgroundColor: '#ff654a',
          borderColor: '#cb472f',
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
          チケット
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
          <RGrid style={{ position: 'absolute' }} />
          <View nativeID="modal_wrap_inner" style={{ height: 335 }}>
            <View
              nativeID="ticket_wrap"
              style={{
                width: '70%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <View nativeID="ticket_name">
                <TicketBack />
                <Text
                  style={{
                    color: '#ff654a',
                    fontSize: 34,
                    fontWeight: 'bold',
                    position: 'absolute',
                    top: 20,
                    left: 65,
                    fontFamily: 'Noto Sans',
                  }}
                >
                  6000円
                </Text>
              </View>
            </View>
            <Text
              nativeID="ticket_txt"
              style={{
                color: '#777',
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 19,
                fontFamily: 'Noto Sans',
              }}
            >
              6,000円分のチケットを
            </Text>
            <Text
              style={{ color: '#777', fontSize: 16, fontWeight: 'bold', textAlign: 'center', fontFamily: 'Noto Sans' }}
            >
              GETしました！
            </Text>
            <View style={{ marginTop: 10, marginLeft: 'auto', marginRight: 'auto' }}>
              <Ticket />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
});
