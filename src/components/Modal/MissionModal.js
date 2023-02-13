import React, { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { GachaTravelColors } from 'src/constants/constants';

import Light from 'src/assets/svg/light.svg';
import Mission from 'src/assets/svg/mission.svg';
import PeGrid from 'src/assets/svg/Pegrid.svg';
import MissionBack from 'src/assets/svg/mission_back.svg';
import PageButton from 'src/assets/svg/mission_arrow.svg';

export const MissionModal = memo((props) => {
  const { nextButton = false, onPressUp, onPressDown, type = 'primary' } = props;
  return (
    <View style={[styles[`container_${type}`]]}>
      <View style={styles.card}>
        <Light style={styles.light} />
        <Text style={styles.modalText}>ミッション</Text>
        <View nativeID="modal_wrap_content" style={styles.modalWrapContent}>
          <PeGrid style={styles.grid} />
          <View nativeID="modal_wrap_inner" style={styles.modalInner}>
            <View nativeID="mission_wrap" style={styles.missoionWrap}>
              <MissionBack />
              <View nativeID="mission_detail" style={styles.missionDetail}>
                <Text style={styles.missionDetailText}>ルートに掲載しているお店</Text>
                <Text style={[styles.missionDetailText, styles.missionDetailText1]}>をインスタに投稿しよう！</Text>
              </View>
            </View>
            <Text nativeID="mission_txt" style={styles.missionText}>
              おすすめのルートに掲載している
            </Text>
            <Text style={[styles.missionText, styles.missionText1]}>お店をインスタに投稿すると、</Text>
            <Text style={[styles.missionText, styles.missionText1]}>そのお店のクーポンがもらえるよ！</Text>
            <View style={styles.missionContainer}>
              <Mission />
            </View>
            {nextButton && (
              <View style={styles.nextButton}>
                <Pressable onPress={onPressDown}>
                  <PageButton />
                </Pressable>
                <View style={styles.nextButtonContainer}>
                  <Text style={styles.nextButtonText}>3/6</Text>
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
  light: {
    top: 10,
    left: 20,
    position: 'absolute',
  },

  grid: {
    position: 'absolute',
  },

  missionDetail: {
    position: 'absolute',
    top: 30,
    left: 30,
  },

  missionText: {
    color: GachaTravelColors.mainTextColor,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    fontFamily: 'Noto Sans',
  },

  missionText1: {
    marginTop: 8,
  },

  missionDetailText: {
    color: GachaTravelColors.missionModalBgColor,
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'Noto Sans',
  },

  missionDetailText1: {
    marginTop: 8,
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
    paddingTop: 32,
    borderBottomEndRadius: 35,
    borderBottomStartRadius: 35,
    paddingBottom: 16,
  },

  card: {
    backgroundColor: GachaTravelColors.missionModalBgColor,
    borderColor: GachaTravelColors.missionCardBorderColor,
    borderWidth: 3,
    paddingHorizontal: 8,
    paddingBottom: 8,
    borderRadius: 40,
    position: 'relative',
  },

  modalInner: {
    height: 335,
  },

  missoionWrap: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  missionContainer: {
    marginTop: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  nextButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginTop: 16,
  },

  nextButtonContainer: {
    backgroundColor: GachaTravelColors.missionNextButtonBgColor,
    borderWidth: 1,
    borderColor: GachaTravelColors.missionNextButtonColor,
    borderRadius: 5,
    marginTop: 8,
    height: 30,
    shadowColor: GachaTravelColors.missionNextButtonColor,
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
