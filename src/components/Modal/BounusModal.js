import React, { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { GachaTravelColors } from 'src/constants/constants';

import { CustomText } from 'src/components/Text/CustomText';

import Light from 'src/assets/svg/light.svg';
import PGrid from 'src/assets/svg/Pgrid.svg';
import BounusCoupon from 'src/assets/svg/bounus_coupon.svg';
import BounusTicket from 'src/assets/svg/bounus_ticket.svg';
import PageButton from 'src/assets/svg/bounus_arrow.svg';

export const BounusModal = memo((props) => {
  const { nextButton = false, onPressUp, onPressDown, type = 'primary' } = props;
  return (
    <View style={[styles[`container_${type}`]]}>
      <View style={styles.card}>
        <Light style={styles.light} />
        <Text style={styles.modalText}>おまけ</Text>
        <View nativeID="modal_wrap_content" style={styles.modalWrapContent}>
          <PGrid style={styles.grid} />
          <View nativeID="modal_wrap_inner" style={styles.modalInner}>
            <View nativeID="bonus_wrap" style={styles.bounusWrap}>
              <BounusCoupon style={styles.bounusCoupon} />
              <View nativeID="bonus_content" style={styles.bounusContent1}>
                <CustomText style={[styles.quponText, styles.quponText1]}>クーポン</CustomText>
              </View>
              <BounusTicket style={styles.bounusTicket} />
              <View nativeID="bonus_content" style={styles.bounusContent2}>
                <Text style={styles.moneyText}>2,000円</Text>
              </View>
              <View style={styles.quponContainer}>
                <Text style={styles.bounusText}>おまけが当たりました!</Text>
                <Text style={styles.bounusText}>2000円分のチケットと</Text>
                <Text style={styles.bounusText}>ルートに掲載しているお店で使える</Text>
                <Text style={styles.bounusText}>クーポンをGETしました!</Text>
              </View>
              {nextButton && (
                <View style={styles.nextButton}>
                  <Pressable onPress={onPressDown}>
                    <PageButton />
                  </Pressable>
                  <View style={styles.nextButtonContainer}>
                    <Text style={styles.nextButtonText}>6/6</Text>
                  </View>
                  <Pressable onPress={onPressUp}>
                    <PageButton style={styles.pageButton} />
                  </Pressable>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container_primary: {
    marginTop: 0,
  },

  container_detail: {
    marginTop: 8,
  },

  light: {
    top: 10,
    left: 20,
    position: 'absolute',
  },

  grid: {
    position: 'absolute',
  },

  bounusCoupon: {
    position: 'relative',
  },

  modalInner: {
    height: 335,
  },

  modalText: {
    color: GachaTravelColors.modalTextColor,
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    marginHorizontal: 16,
    padding: 16,
    fontFamily: 'Noto Sans',
  },

  modalWrapContent: {
    backgroundColor: GachaTravelColors.mainBgColor,
    paddingTop: 40,
    borderBottomEndRadius: 35,
    borderBottomStartRadius: 35,
    paddingBottom: 16,
  },

  card: {
    backgroundColor: GachaTravelColors.bounusModalBgColor,
    borderColor: GachaTravelColors.bounusCardBorderColor,
    borderWidth: 3,
    paddingHorizontal: 3,
    paddingBottom: 3,
    borderRadius: 40,
    position: 'relative',
  },

  moneyText: {
    color: GachaTravelColors.bounusModalTextColor,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Noto Sans',
    fontSize: 35,
  },

  bounusContent1: {
    position: 'absolute',
    top: 30,
    left: 45,
  },

  bounusContent2: {
    position: 'absolute',
    top: 80,
    left: 100,
  },

  bounusWrap: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  bounusTicket: {
    position: 'absolute',
    top: 60,
    left: 30,
  },

  quponContainer: {
    marginTop: 80,
  },

  quponText: {
    color: GachaTravelColors.bounusModalTextColor,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Noto Sans',
  },

  quponText1: {
    fontSize: 27,
  },

  quponText2: {
    fontSize: 27,
  },

  bounusText: {
    color: GachaTravelColors.mainTextColor,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 23,
  },

  nextButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },

  nextButtonContainer: {
    backgroundColor: GachaTravelColors.bounusNextButtonBgColor,
    borderWidth: 1,
    borderColor: GachaTravelColors.bounusNextButtonColor,
    borderRadius: 5,
    marginTop: 8,
    height: 30,
    shadowColor: GachaTravelColors.bounusNextButtonColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 1,
  },

  nextButtonText: {
    fontSize: 14,
    color: GachaTravelColors.modalTextColor,
    paddingHorizontal: 16,
    lineHeight: 26,
    fontWeight: 'bold',
    letterSpacing: 3,
    fontFamily: 'Noto Sans',
  },

  pageButton: {
    transform: [{ rotate: '60deg' }],
  },
});
