import React, { memo } from 'react';
import { Button, Text, View } from 'react-native';

export const Home = memo((props) => {
  const { navigation } = props;
  return (
    <View>
      <Text>Home</Text>
      <Button title="detail" onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>
    </View>
  );
});

export const Details = memo(() => {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
});
