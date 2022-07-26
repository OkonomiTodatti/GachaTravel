import React, { memo } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import collectionBg from '../../assets/collectionBg.png';
import CollectionHeader from '../../assets/collectionHeader.svg';
import { GachaFrame } from '../Gacha/GachaFrame';
import Test from '../../assets/test.svg';

export const CollectionPage = memo(() => {
  return (
    <View style={styles.container}>
      <ImageBackground source={collectionBg} resizeMode="cover" style={{ flex: 1 }}>
        <CollectionHeader />
        <View style={{ alignItems: 'center' }}>
          <ScrollView contentInset={{ bottom: 200 }}>
            <Test
              style={{
                marginRight: 'auto',
                marginLeft: 'auto',
                marginTop: 10,
                shadowColor: '#1BA0A0',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 1,
              }}
            />
            <GachaFrame color="B" status={false} prefecture="長崎県" plan="夏旅行" people="1" />
            <GachaFrame color="B" status={false} prefecture="大阪府" plan="夏旅行" people="1" />
            <GachaFrame color="B" status={false} prefecture="東京都" plan="夏旅行" people="1" />
            <GachaFrame color="G" status={true} prefecture="長崎県" plan="春旅行" people="1" />
            <GachaFrame color="R" status={true} prefecture="長崎県" plan="春旅行" people="1" />
            <GachaFrame color="Y" status={true} prefecture="長崎県" plan="夏旅行" people="2" />
            <GachaFrame color="G" status={false} prefecture="長崎県" plan="春旅行" people="1" />
            <GachaFrame color="R" status={false} prefecture="長崎県" plan="夏旅行" people="2" />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
