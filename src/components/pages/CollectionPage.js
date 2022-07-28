import React, { memo, useEffect, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import collectionBg from '../../assets/collectionBg.png';
import CollectionHeader from '../../assets/collectionHeader.svg';
import { GachaFrame } from '../Gacha/GachaFrame';
import Test from '../../assets/test.svg';
import { API, graphqlOperation } from 'aws-amplify';
import { getStock, listStocks, listUsers } from '../../graphql/queries';
import { useLoginUser } from '../../provider/LoginUserProvider';
import * as queries from '../../graphql/queries';
import { useGetStocks } from '../../hooks/useGetStocks';
import { data } from '../../data';

export const CollectionPage = memo(() => {
  const { loginUser } = useLoginUser();
  // const [stocks, setStocks] = useState([]);
  // async function fetchListStocks(id) {
  //   try {
  //     // const data = await API.graphql(graphqlOperation(getUser, { id: loginUser }));
  //     // API.graphql(graphqlOperation(listUsers, { filter: { user_id: { eq: id } } })).then((result)=>{
  //     //   setStocks(result);
  //     //   console.log(result);
  //     // });
  //     // const data = API.graphql(graphqlOperation(listStocks, { filter: { id: { eq: id } } }));
  //     // const data = API.graphql(graphqlOperation(getStock, { id: '3a259431-94c7-4171-9e88-d087791c6377' }));
  //     const data = await API.graphql({ query: queries.listStocks, filter: { id: { eq: id }, limit: 20 } });
  //     const test = await API.graphql(graphqlOperation(getStock, { id: '3a259431-94c7-4171-9e88-d087791c6378' }));
  //     setStocks(data.data.listStocks.items);
  //     // const data = API.graphql(graphqlOperation(listUsers));
  //     // console.log(test.data.getStock.recommend_plans);
  //     console.log(data.data.listStocks.items[0]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const { loading, getStocks, stocks } = useGetStocks();

  useEffect(() => {
    // fetchListStocks(loginUser);
    getStocks(loginUser);
  }, []);

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
            <GachaFrame color="B" status={false} prefecture="大阪府" plan="夏旅行" people="1" prefectureId={3} />
            {stocks.map((stock, index) => (
              <View key={index}>
                <GachaFrame
                  color={stock.color}
                  status={false}
                  prefecture={data[stock.recommend_plans.items[0].prefecture_id].prefecture}
                  plan={stock.recommend_plans.items[0].content}
                  people={stock.people}
                  prefectureId={stock.recommend_plans.items[0].prefecture_id}
                />
              </View>
            ))}
            {/*<GachaFrame color="B" status={false} prefecture="長崎県" plan="夏旅行" people="1" />*/}
            {/*<GachaFrame color="B" status={false} prefecture="東京都" plan="夏旅行" people="1" />*/}
            {/*<GachaFrame color="G" status={true} prefecture="長崎県" plan="春旅行" people="1" />*/}
            {/*<GachaFrame color="R" status={true} prefecture="長崎県" plan="春旅行" people="1" />*/}
            {/*<GachaFrame color="Y" status={true} prefecture="長崎県" plan="夏旅行" people="2" />*/}
            {/*<GachaFrame color="G" status={false} prefecture="長崎県" plan="春旅行" people="1" />*/}
            {/*<GachaFrame color="R" status={false} prefecture="長崎県" plan="夏旅行" people="2" />*/}
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
