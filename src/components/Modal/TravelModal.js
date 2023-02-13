import React, { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { GachaTravelColors } from 'src/constants/constants';
import { prefectureData } from 'src/constants/data';

import Light from 'src/assets/svg/light.svg';
import Japan from 'src/assets/svg/japan.svg';
import BGrid from 'src/assets/svg/Bgrid.svg';
import PageButton from 'src/assets/svg/travel_arrow.svg';

export const TravelModal = memo((props) => {
  const {
    nextButton = false,
    onPressUp,
    onPressDown,
    type = 'primary',
    prefectureId = 1,
    prefecture = '北海道',
  } = props;
  return (
    <View style={[styles[`container_${type}`]]}>
      <View style={styles.card}>
        <Light style={styles.light} />
        <Text style={styles.modalText}>旅行先</Text>
        <View nativeID="modal_wrap_content" style={styles.modalWrapContent}>
          <BGrid style={styles.grid} />
          <View nativeID="modal_wrap_inner" style={styles.modalInner}>
            <View nativeID="place_wrap" style={styles.placeWrap}>
              <View nativeID="place_name">
                <Text style={[styles.prefectureText, styles.prefectureText1]}>{prefectureData[prefectureId].kana}</Text>
                <Text style={[styles.prefectureText, styles.prefectureText2]}>{prefecture}</Text>
              </View>
            </View>
            <Text style={styles.purposeText}>旅行先は{prefectureData[prefectureId].prefecture}です！</Text>
            <View style={styles.japanIcon}>
              <Japan />
            </View>
            {nextButton && (
              <View style={styles.nextButton}>
                <Pressable onPress={onPressDown}>
                  <PageButton />
                </Pressable>
                <View style={styles.nextButtonContainer}>
                  <Text style={styles.nextButtonText}>1/6</Text>
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
  );
});

const styles = StyleSheet.create({
  container_primary: {
    marginTop: 0,
  },

  container_detail: {
    marginTop: 8,
  },

  card: {
    backgroundColor: GachaTravelColors.placeModalBgColor,
    borderColor: GachaTravelColors.placeCardBorderColor,
    borderWidth: 3,
    paddingHorizontal: 8,
    paddingBottom: 8,
    borderRadius: 40,
    position: 'relative',
  },

  light: {
    top: 10,
    left: 20,
    position: 'absolute',
  },

  grid: {
    position: 'absolute',
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

  placeWrap: {
    width: '70%',
    borderRadius: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: GachaTravelColors.placeModalBorderColor,
    borderWidth: 4,
  },

  prefectureText: {
    color: GachaTravelColors.placeModalTextColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  prefectureText1: {
    fontSize: 12,
  },

  prefectureText2: {
    fontSize: 35,
  },

  purposeText: {
    color: GachaTravelColors.mainTextColor,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
  },

  japanIcon: {
    marginTop: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  nextButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },

  nextButtonContainer: {
    backgroundColor: GachaTravelColors.placeModalBgColor,
    borderWidth: 1,
    borderColor: GachaTravelColors.placeNextButtonColor,
    borderRadius: 5,
    marginTop: 8,
    height: 30,
    shadowColor: GachaTravelColors.placeNextButtonColor,
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
