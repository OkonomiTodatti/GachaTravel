import React, { useCallback, useState } from 'react';

import { API } from 'aws-amplify';

import * as queries from 'src/graphql/queries';

export const useGetRecommendPlan = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const getRecommendPlan = useCallback(() => {
    setLoading(true);
    try {
      API.graphql({ query: queries.listStocks, filter: { createdAt: { between: {} } } }).then((result) => {
        setStocks(result.data.listStocks.items);
        console.log(result.data.listStocks.items[0].recommend_plans.items[0].prefecture.items[0].prefecture);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return { loading, getRecommendPlan, stocks };
};
