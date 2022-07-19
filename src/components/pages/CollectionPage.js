import React, { memo } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Logo from '../../assets/Logo.png';
export const CollectionPage = memo(() => {
  return (
    <ScrollView style={styles.container}>
      {/*<Pressable onPress={() => alert('aa')}>*/}
      {/*  <View style={styles.card}>*/}
      {/*    <Image source={Logo} style={{ width: '100%', height: '100%' }} />*/}
      {/*    <View>*/}
      {/*      <Text>こんにちは</Text>*/}
      {/*      <Text>コレクション</Text>*/}
      {/*    </View>*/}
      {/*  </View>*/}
      {/*</Pressable>*/}
      <View
        style={{
          height: '100%',
          position: 'absolute',
          width: '100%',
          flexDirection: 'row',
        }}
      >
        <View style={styles.border} />
        <View style={styles.border} />
        <View style={styles.border} />
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    position: 'relative',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 13,
    marginTop: 15,
    marginHorizontal: 10,
    width: 180,
    height: 180,
    padding: 10,
  },

  border: {
    borderRightWidth: 30,
    borderColor: '#333',
    height: '100%',
    width: '20%',
  },
});
