import React, { useCallback, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listStocks } from '../graphql/queries';

export const useGetStocks = () => {
  const [stock, setStocks] = useState();
  const [loading, setLoading] = useState(false);
  const getStocks = useCallback((id: string) => {
    setLoading(true);
    try {
      // const data = await API.graphql(graphqlOperation(getUser, { id: loginUser }));
      const data = API.graphql(graphqlOperation(listStocks, { filter: { user_id: { eq: id } } }));
      setStocks(data);
    } catch (err) {
      console.log(err);
    }
    return { loading, getStocks, stock };
  }, []);
};
