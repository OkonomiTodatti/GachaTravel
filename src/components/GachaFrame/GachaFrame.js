import React, { memo } from 'react';
import CollectionFrame from '../../assets/collectionFrame.svg';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import BCapsule from '../../assets/Bcapsule.svg';
import RCapsule from '../../assets/Rcapsule.svg';
import YCapsule from '../../assets/Ycapsule.svg';
import GCapsule from '../../assets/Gcapsule.svg';
import OBCapsule from '../../assets/OBcapsule.svg';
import ORCapsule from '../../assets/ORcapsule.svg';
import OYCapsule from '../../assets/OYcapsule.svg';
import OGCapsule from '../../assets/OGcapsule.svg';
import SecondaryButton from '../../assets/SecondaryButton.svg';
import { useNavigation } from '@react-navigation/native';

export const GachaFrame = memo((props) => {
  const { color, status, prefecture, plan, people } = props;
  const navigation = useNavigation();
  const capsuleComponents = {
    R: status ? ORCapsule : RCapsule,
    G: status ? OGCapsule : GCapsule,
    B: status ? OBCapsule : BCapsule,
    Y: status ? OYCapsule : YCapsule,
  };

  const Capsule = capsuleComponents[color];

  return (
    <View>
      <CollectionFrame style={styles.collectionFrame} />
      <View style={styles.detail}>
        <Capsule style={{ marginTop: 10 }} />
        <View style={{ marginLeft: 60 }}>
          <Text style={styles.planText}>{plan}</Text>
          <View style={{ flexDirection: 'row', marginTop: 11, marginLeft: 15 }}>
            <Text style={styles.textPrefecture}>{prefecture}</Text>
            <Text style={styles.textPeople}>{people}</Text>
          </View>
          <Pressable style={styles.button} onPress={() => navigation.navigate('GachaResultDetail', { name: plan })}>
            <SecondaryButton />
            <Text style={styles.buttonText}>詳細を見る</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  collectionFrame: {
    marginTop: 20,
    position: 'relative',
  },

  detail: {
    position: 'absolute',
    top: 35,
    left: 69,
    flexDirection: 'row',
  },

  button: {
    width: 120,
    height: 60,
    position: 'relative',
    marginTop: 10,
  },

  buttonText: {
    color: '#322400',
    fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    fontSize: 13,
    position: 'absolute',
    top: 11,
    left: 25,
  },

  planText: {
    color: '#67533A',
    fontWeight: 'bold',
    fontSize: 16,
  },

  textPrefecture: {
    color: '#A6A18D',
    fontWeight: 'bold',
    fontSize: 11,
  },

  textPeople: {
    color: '#A6A18D',
    fontWeight: 'bold',
    fontSize: 11,
    marginLeft: 55,
  },
});
