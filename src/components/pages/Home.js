import React, { memo } from 'react';
import { Button, Text, ScrollView, StyleSheet, ImageBackground, View } from 'react-native';
import image from '../../assets/Logo.png';

export const Home = memo((props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="detail" onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>
    </View>
  );
});

export const Details = memo(() => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text>Details</Text>
      </ImageBackground>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
