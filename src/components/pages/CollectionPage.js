import React, { memo, useEffect } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';

import { GachaFrame } from 'src/components/Gacha/GachaFrame';

import { useLoginUser } from 'src/provider/LoginUserProvider';

import { useGetStocks } from 'src/hooks/useGetStocks';

import { GachaTravelColors } from 'src/constants/constants';

import collectionBg from 'src/assets/images/collectionBg.png';
import CollectionHeader from 'src/assets/svg/collectionHeader.svg';
import CollectionSectionHeader from 'src/assets/svg/collectionSectionHeader.svg';

export const CollectionPage = memo(() => {
  const { loginUser } = useLoginUser();

  const { getStocks, stocks } = useGetStocks();

  useEffect(() => {
    getStocks(loginUser);
  }, [stocks]);

  return (
    <View style={styles.container}>
      <ImageBackground source={collectionBg} resizeMode="cover">
        <CollectionHeader />
        <View style={styles.scrollContainer}>
          <ScrollView contentInset={styles.scrollView}>
            <CollectionSectionHeader style={styles.collectionSectionHeader} />
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

  scrollContainer: {
    alignItems: 'center',
  },

  scrollView: {
    bottom: 200,
  },

  collectionSectionHeader: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 16,
    shadowColor: GachaTravelColors.collectionSectionHeaderShadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 1,
  },
});
