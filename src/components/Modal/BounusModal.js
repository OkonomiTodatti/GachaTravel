import React, { memo } from 'react';
import { Text, View } from 'react-native';
import Light from '../../assets/light.svg';
import Ticket from '../../assets/ticket.svg';
import PGrid from '../../assets/Pgrid.svg';
import BounusCoupon from '../../assets/bounus_coupon.svg';
import BounusTicket from '../../assets/bounus_ticket.svg';

export const BounusModal = memo(() => {
  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          backgroundColor: '#f794a9',
          borderColor: '#c76f82',
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
          おまけ
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
          <PGrid style={{ position: 'absolute' }} />
          <View nativeID="modal_wrap_inner" style={{ height: 335 }}>
            <View
              nativeID="bonus_wrap"
              style={{
                width: '80%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <BounusCoupon style={{ position: 'relative' }} />
              <View nativeID="bonus_content" style={{ position: 'absolute', top: 30, left: 45 }}>
                <Text
                  style={{
                    color: '#f794a9',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: 'Noto Sans',
                    fontSize: 27,
                  }}
                >
                  クーポン
                </Text>
              </View>
              <BounusTicket style={{ position: 'absolute', top: 60, left: 30 }} />
              <View nativeID="bonus_content" style={{ position: 'absolute', top: 80, left: 100 }}>
                <Text
                  style={{
                    color: '#f794a9',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: 'Noto Sans',
                    fontSize: 35,
                  }}
                >
                  2,000円
                </Text>
              </View>
              <View style={{ marginTop: 80 }}>
                <Text
                  style={{
                    color: '#777',
                    fontSize: 16,
                    fontFamily: 'Noto Sans',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    lineHeight: 23,
                  }}
                >
                  おまけが当たりました!
                </Text>
                <Text
                  style={{
                    color: '#777',
                    fontSize: 16,
                    fontFamily: 'Noto Sans',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    lineHeight: 23,
                  }}
                >
                  2000円分のチケットと
                </Text>
                <Text
                  style={{
                    color: '#777',
                    fontSize: 16,
                    fontFamily: 'Noto Sans',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    lineHeight: 23,
                  }}
                >
                  ルートに掲載しているお店で使える
                </Text>
                <Text
                  style={{
                    color: '#777',
                    fontSize: 16,
                    fontFamily: 'Noto Sans',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    lineHeight: 23,
                  }}
                >
                  クーポンをGETしました!
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
});
