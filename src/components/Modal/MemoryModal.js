import React, { memo } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Light from '../../assets/light.svg';
import YGrid from '../../assets/Ygrid.svg';
import PageButton from '../../assets/memory_arrow.svg';

export const MemoryModal = memo((props) => {
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
                width: '80%',
                marginLeft: 'auto',
                marginRight: 'auto',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}
            >
              <Image
                style={{ width: '33%', height: 80, marginVertical: 1 }}
                source={require('../../assets/png9.png')}
              />
              <Image
                style={{ width: '33%', height: 80, marginVertical: 1 }}
                source={require('../../assets/png1.png')}
              />
              <Image
                style={{ width: '33%', height: 80, marginVertical: 1 }}
                source={require('../../assets/png2.png')}
              />
              <Image
                style={{ width: '33%', height: 80, marginVertical: 1 }}
                source={require('../../assets/png3.png')}
              />
              <Image
                style={{ width: '33%', height: 80, marginVertical: 1 }}
                source={require('../../assets/png4.png')}
              />
              <Image
                style={{ width: '33%', height: 80, marginVertical: 1 }}
                source={require('../../assets/png5.png')}
              />
              <Image
                style={{ width: '33%', height: 80, marginVertical: 1 }}
                source={require('../../assets/png6.png')}
              />
              <Image
                style={{ width: '33%', height: 80, marginVertical: 1 }}
                source={require('../../assets/png7.png')}
              />
              <Image
                style={{ width: '33%', height: 80, marginVertical: 1 }}
                source={require('../../assets/png8.png')}
              />
            </View>
            {type === 'primary' ? (
              <Pressable>
                <Text
                  style={{ color: '#ea9c3b', fontSize: 16, textAlign: 'center', marginTop: 22, borderColor: '#ea9c3b' }}
                >
                  すべて見る
                </Text>
              </Pressable>
            ) : (
              <View style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: 10 }}>
                <Text
                  style={{
                    color: '#777',
                    fontSize: 18,
                    fontFamily: 'Noto Sans',
                    fontWeight: 'bold',
                    lineHeight: 23,
                  }}
                >
                  色々な方のその地の
                </Text>
                <Text
                  style={{
                    color: '#777',
                    fontSize: 18,
                    fontFamily: 'Noto Sans',
                    fontWeight: 'bold',
                    lineHeight: 23,
                  }}
                >
                  思い出を見られます。
                </Text>
              </View>
            )}
            {nextButton ? (
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                <Pressable onPress={onPressDown}>
                  <PageButton />
                </Pressable>
                <View
                  style={{
                    backgroundColor: '#ea9c3b',
                    borderWidth: 1,
                    borderColor: '#bb7e31',
                    borderRadius: 5,
                    marginTop: 6,
                    height: 30,
                    shadowColor: '#bb7e31',
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
                    5/6
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
    backgroundColor: '#ea9c3b',
    borderColor: '#bb7e31',
    borderWidth: 3,
    paddingHorizontal: 3,
    paddingBottom: 3,
    borderRadius: 40,
    position: 'relative',
  },
});
