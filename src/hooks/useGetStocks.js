import React, { useCallback, useState } from 'react';

import { API } from 'aws-amplify';

import * as queries from '../graphql/queries';

export const useGetStocks = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const getStocks = useCallback((id) => {
    setLoading(true);
    try {
      API.graphql({
        query: queries.listStocks,
        filter: { id: { eq: id }, limit: 20 },
        variables: { sortDirection: 'DESC' },
      }).then((result) => {
        setStocks(result.data.listStocks.items);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return { loading, getStocks, stocks };
};
