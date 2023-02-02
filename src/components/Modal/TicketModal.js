import React, { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Light from '../../assets/light.svg';
import Ticket from '../../assets/ticket.svg';
import RGrid from '../../assets/Rgrid.svg';
import TicketBack from '../../assets/ticket_back.svg';
import PageButton from '../../assets/ticket_arrow.svg';

export const TicketModal = memo((props) => {
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
          チケット
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
              GETしました!
            </Text>
            <View style={{ marginTop: 4, marginLeft: 'auto', marginRight: 'auto' }}>
              <Ticket />
            </View>
            {nextButton ? (
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Pressable onPress={onPressDown}>
                  <PageButton />
                </Pressable>
                <View
                  style={{
                    backgroundColor: '#ff654a',
                    borderWidth: 1,
                    borderColor: '#cb472f',
                    borderRadius: 5,
                    marginTop: 6,
                    height: 30,
                    shadowColor: '#cb472f',
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
                    2/6
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
    backgroundColor: '#ff654a',
    borderColor: '#cb472f',
    borderWidth: 3,
    paddingHorizontal: 3,
    paddingBottom: 3,
    borderRadius: 40,
    position: 'relative',
  },
});
