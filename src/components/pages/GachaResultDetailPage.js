import React, { memo } from 'react';
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { GachaTravelColors } from 'src/constants/constants';

import { Label } from 'src/components/Text/Lable';
import { TravelModal } from 'src/components/Modal/TravelModal';
import { TicketModal } from 'src/components/Modal/TicketModal';
import { MissionModal } from 'src/components/Modal/MissionModal';
import { RootModal } from 'src/components/Modal/RootModal';
import { MemoryModal } from 'src/components/Modal/MemoryModal';
import { BounusModal } from 'src/components/Modal/BounusModal';
import { GlassButton } from 'src/components/Inputs/GlassButton';
import { ResultTag } from 'src/components/Gacha/ResultTag';

import RCapsule from 'src/assets/svg/RbigCapusel.svg';
import YCapsule from 'src/assets/svg/YbigCapsule.svg';
import BCapsule from 'src/assets/svg/BbigCapsule.svg';
import GCapsule from 'src/assets/svg/Gcapsule.svg';
import ORCapsule from 'src/assets/svg/ORcapsule.svg';
import OGCapsule from 'src/assets/svg/OGcapsule.svg';
import OBCapsule from 'src/assets/svg/OBcapsule.svg';
import OYCapsule from 'src/assets/svg/OYcapsule.svg';
import TertiaryButton from 'src/assets/svg/TertiaryButton.svg';
import collectionBg from 'src/assets/images/collectionBg.png';

export const GachaResultDetailPage = memo(() => {
  const navigation = useNavigation();
  const route = useRoute();
  const { plan, id, color, status, prefecture } = route.params;
  const people = route.params.people.toString();
  const capsuleComponents = {
    R: status ? ORCapsule : RCapsule,
    G: status ? OGCapsule : GCapsule,
    B: status ? OBCapsule : BCapsule,
    Y: status ? OYCapsule : YCapsule,
  };
  const Capsule = capsuleComponents[color];
  return (
    <View style={styles.container}>
      <ImageBackground source={collectionBg} resizeMode="cover">
        <View style={styles.scrollContainer}>
          <ScrollView contentInset={styles.scrollView}>
            <View style={[styles.cardContainer, styles.capuselContainer]}>
              <View style={styles.cardInner}>
                <Capsule style={styles.capusel} />
                <View style={styles.dateOfExpirtyContainer}>
                  <Text style={styles.dateOfExpirtyText}>有効期限:2023/9/12</Text>
                </View>
              </View>
            </View>
            <View style={[styles.cardContainer, styles.reserveContainer]}>
              <View style={styles.reserveItemContainer}>
                <Label text="人数" type="tertiary" />
                <TextInput style={styles.input} value={people + '人'} editable={false} selectTextOnFocus={false} />
              </View>
              <View style={styles.reserveItemContainer}>
                <Label text="宿泊日数" type="tertiary" />
                <TextInput style={styles.input} value="1日" editable={false} selectTextOnFocus={false} />
              </View>
              <View style={styles.reserveItemContainer}>
                <Label text="旅行名" type="tertiary" />
                <TextInput style={styles.input} value={plan} editable={false} selectTextOnFocus={false} />
              </View>
            </View>
            <ResultTag />
            <TravelModal type="detail" prefectureId={id} prefecture={prefecture} />
            <GlassButton color="B" onPress={() => console.log('push')} />
            <TicketModal type="detail" />
            <GlassButton color="R" onPress={() => console.log('push')} />
            <MissionModal type="detail" />
            <GlassButton color="Pe" onPress={() => console.log('push')} />
            <RootModal type="detail" />
            <GlassButton color="B2" onPress={() => console.log('push')} />
            <MemoryModal type="detail" />
            <GlassButton color="Y" onPress={() => console.log('push')} />
            <BounusModal type="detail" />
            <GlassButton color="P" onPress={() => console.log('push')} />
          </ScrollView>
        </View>
        <View style={styles.bottomContainer}>
          <Pressable
            onPress={() =>
              navigation.navigate('BuyTicket', {
                people: people,
                prefecture: prefecture,
              })
            }
          >
            <TertiaryButton style={styles.buyButton} />
            <Text style={styles.buyButtonText}>チケット購入手続きへ</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GachaTravelColors.mainBgColor,
  },

  scrollContainer: {
    alignItems: 'center',
  },

  scrollView: {
    bottom: 200,
  },

  cardContainer: {
    backgroundColor: GachaTravelColors.collectionCardBgColor,
    borderColor: GachaTravelColors.collectionBorderColor,
    borderWidth: 2,
    borderRadius: 19,
    width: 331,
    marginTop: 32,
  },

  capuselContainer: {
    height: 192,
  },

  reserveContainer: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },

  cardInner: {
    backgroundColor: GachaTravelColors.collectionInnerCardBgColor,
    borderColor: GachaTravelColors.collectionInnerBorderColor,
    borderWidth: 2,
    borderRadius: 10,
    width: 310,
    height: 171,
    alignSelf: 'center',
    marginTop: 8,
  },

  capusel: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 8,
  },

  dateOfExpirtyText: {
    color: GachaTravelColors.collectionDateOfExpiryTextColor,
    fontSize: 17,
    fontFamily: 'Noto Sans',
  },

  dateOfExpirtyContainer: {
    position: 'absolute',
    bottom: 15,
    left: 70,
  },

  input: {
    color: GachaTravelColors.collectionTextColor,
    borderBottomColor: GachaTravelColors.lineColor,
    height: 40,
    borderBottomWidth: 1,
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Noto Sans',
  },

  reserveItemContainer: {
    marginTop: 8,
  },

  bottomContainer: {
    width: '100%',
    height: '13%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 65,
    borderTopRightRadius: 65,
    backgroundColor: GachaTravelColors.bottomNagigationBgColor,
  },

  buyButton: {
    position: 'absolute',
    top: 20,
    left: 50,
  },

  buyButtonText: {
    color: GachaTravelColors.secondaryButtonTextColor,
    fontSize: 16,
    fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 32,
  },
});
