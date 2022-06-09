import React, { memo } from 'react';
import { Button, Text, ScrollView, StyleSheet, ImageBackground, View } from 'react-native';
import image from '../../assets/background.jpeg';

export const Home = memo((props) => {
  const { navigation } = props;
  return (
    <ScrollView style={styles.container}>
      <Text>Home</Text>
      <Button title="detail" onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>
    </ScrollView>
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
