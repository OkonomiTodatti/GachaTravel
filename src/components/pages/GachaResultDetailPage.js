import React, { memo } from 'react';
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Label } from '../Text/Lable';

import { TravelModal } from '../Modal/TravelModal';
import { TicketModal } from '../Modal/TicketModal';
import { MissionModal } from '../Modal/MissionModal';
import { RootModal } from '../Modal/RootModal';
import { MemoryModal } from '../Modal/MemoryModal';
import { BounusModal } from '../Modal/BounusModal';

import { GlassButton } from '../Inputs/GlassButton';

import { ResultTag } from '../Gacha/ResultTag';

import RCapsule from '../../assets/RbigCapusel.svg';
import YCapsule from '../../assets/YbigCapsule.svg';
import BCapsule from '../../assets/BbigCapsule.svg';
import GCapsule from '../../assets/Gcapsule.svg';
import ORCapsule from '../../assets/ORcapsule.svg';
import OGCapsule from '../../assets/OGcapsule.svg';
import OBCapsule from '../../assets/OBcapsule.svg';
import OYCapsule from '../../assets/OYcapsule.svg';
import collectionBg from '../../assets/collectionBg.png';
import TertiaryButton from '../../assets/TertiaryButton.svg';

export const GachaResultDetailPage = memo(() => {
  const navigation = useNavigation();
  const route = useRoute();
  const plan = route.params.name;
  const id = route.params.id;
  const color = route.params.color;
  const status = route.params.status;
  const prefecture = route.params.prefecture;
  const capsuleComponents = {
    R: status ? ORCapsule : RCapsule,
    G: status ? OGCapsule : GCapsule,
    B: status ? OBCapsule : BCapsule,
    Y: status ? OYCapsule : YCapsule,
  };
  const Capsule = capsuleComponents[color];

  return (
    <View style={styles.container}>
      <ImageBackground source={collectionBg} resizeMode="cover" style={{ flex: 1 }}>
        <View style={{ alignItems: 'center' }}>
          <ScrollView contentInset={{ bottom: 200 }}>
            <View
              style={{
                backgroundColor: '#fff',
                borderColor: '#D7A542',
                borderWidth: 2,
                borderRadius: 19,
                width: 331,
                height: 192,
                marginTop: 30,
              }}
            >
              <View
                style={{
                  backgroundColor: '#EBE4CE',
                  borderColor: '#D6D2BA',
                  borderWidth: 2,
                  borderRadius: 10,
                  width: 310,
                  height: 171,
                  alignSelf: 'center',
                  marginTop: 8,
                }}
              >
                <Capsule style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: 10 }} />
                <View style={{ position: 'absolute', bottom: 15, left: 70 }}>
                  <Text style={{ color: '#ED5954', fontSize: 17, fontFamily: 'Noto Sans' }}>有効期限：2023/9/12</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                borderColor: '#D7A542',
                borderWidth: 2,
                borderRadius: 19,
                width: 331,
                // height: 274,
                marginTop: 30,
                paddingHorizontal: 35,
                paddingVertical: 15,
              }}
            >
              <View style={{ marginTop: 5 }}>
                <Label text="人数" type="tertiary" />
                <TextInput
                  style={styles.input}
                  value="1人"
                  keyboardType="numeric"
                  editable={false}
                  selectTextOnFocus={false}
                />
              </View>
              <View style={{ marginTop: 5 }}>
                <Label text="宿泊日数" type="tertiary" />
                <TextInput style={styles.input} value="1日" editable={false} selectTextOnFocus={false} />
              </View>
              <View style={{ marginTop: 5 }}>
                <Label text="旅行名" type="tertiary" />
                <TextInput style={styles.input} value={plan} editable={false} selectTextOnFocus={false} />
              </View>
            </View>
            <View>
              <ResultTag />
              <TravelModal type="detail" prefectureId={id} prefecture={prefecture} />
              <GlassButton color="B" onPress={() => console.log('push')} />
            </View>
            <View>
              <TicketModal type="detail" />
              <GlassButton color="R" onPress={() => console.log('push')} />
            </View>
            <View>
              <MissionModal type="detail" />
              <GlassButton color="Pe" onPress={() => console.log('push')} />
            </View>
            <View>
              <RootModal type="detail" />
              <GlassButton color="B2" onPress={() => console.log('push')} />
            </View>
            <View>
              <MemoryModal type="detail" />
              <GlassButton color="Y" onPress={() => console.log('push')} />
            </View>
            <View>
              <BounusModal type="detail" />
              <GlassButton color="P" onPress={() => console.log('push')} />
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            width: '100%',
            height: '13%',
            position: 'absolute',
            bottom: 0,
            borderTopLeftRadius: 65,
            borderTopRightRadius: 65,
            backgroundColor: '#fff',
          }}
        >
          <Pressable onPress={() => navigation.navigate('BuyTicket')}>
            <TertiaryButton style={{ position: 'absolute', top: 20, left: 50 }} />
            <Text
              style={{ fontSize: 16, fontFamily: 'Noto Sans', fontWeight: 'bold', textAlign: 'center', marginTop: 33 }}
            >
              チケット購入手続きへ
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  input: {
    height: 40,
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    color: '#67533A',
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Noto Sans',
  },
});
