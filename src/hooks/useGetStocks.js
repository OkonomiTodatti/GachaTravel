import React, { useCallback, useState } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';

export const useGetStocks = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const getStocks = useCallback((id: string) => {
    setLoading(true);
    try {
      API.graphql({ query: queries.listStocks, filter: { id: { eq: id }, limit: 20 } }).then((result) => {
        setStocks(result.data.listStocks.items);
        console.log(result.data.listStocks.items[0].recommend_plans.items[0].prefecture.items[0].prefecture);
      });
      // setStocks(data.data.listStocks.items);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return { loading, getStocks, stocks };
};
