import React, { memo, useEffect } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';

import { GachaFrame } from 'src/components/Gacha/GachaFrame';

import { useLoginUser } from 'src/provider/LoginUserProvider';

import { useGetStocks } from 'src/hooks/useGetStocks';

import collectionBg from 'src/assets/images/collectionBg.png';
import CollectionHeader from 'src/assets/svg/collectionHeader.svg';
import CollectionSectionHeader from 'src/assets/svg/collectionSectionHeader.svg';

export const CollectionPage = memo(() => {
  const { loginUser, gachaFlag } = useLoginUser();

  const { getStocks, stocks } = useGetStocks();

  useEffect(() => {
    getStocks(loginUser);
  }, [stocks]);

  return (
    <View style={styles.container}>
      <ImageBackground source={collectionBg} resizeMode="cover" style={{ flex: 1 }}>
        <CollectionHeader />
        <View style={{ alignItems: 'center' }}>
          <ScrollView contentInset={{ bottom: 200 }}>
            <CollectionSectionHeader
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
            {stocks.map((stock, index) => (
              <View key={index}>
                <GachaFrame
                  color={stock.color}
                  status={stock.status}
                  prefecture={stock.recommend_plans.items[0].prefecture.items[0].prefecture}
                  plan={stock.recommend_plans.items[0].content}
                  people={stock.people}
                  prefectureId={stock.recommend_plans.items[0].prefecture_id}
                />
              </View>
            ))}
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
