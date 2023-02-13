import React, { memo } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { GachaTravelColors } from 'src/constants/constants';

import Light from 'src/assets/svg/light.svg';
import YGrid from 'src/assets/svg/Ygrid.svg';
import PageButton from 'src/assets/svg/memory_arrow.svg';

export const MemoryModal = memo((props) => {
  const { nextButton = false, onPressUp, onPressDown, type = 'primary' } = props;
  return (
    <View style={[styles[`container_${type}`]]}>
      <View style={styles.card}>
        <Light style={styles.light} />
        <Text style={styles.modalText}>その地の思い出</Text>
        <View nativeID="modal_wrap_content" style={styles.modalWrapContent}>
          <YGrid style={styles.grid} />
          <View nativeID="modal_wrap_inner" style={styles.modalInner}>
            <View nativeID="memory_wrap" style={styles.memoryWrap}>
              <Image style={styles.memoryImage} source={require('src/assets/images/png9.png')} />
              <Image style={styles.memoryImage} source={require('src/assets/images/png1.png')} />
              <Image style={styles.memoryImage} source={require('src/assets/images/png2.png')} />
              <Image style={styles.memoryImage} source={require('src/assets/images/png3.png')} />
              <Image style={styles.memoryImage} source={require('src/assets/images/png4.png')} />
              <Image style={styles.memoryImage} source={require('src/assets/images/png5.png')} />
              <Image style={styles.memoryImage} source={require('src/assets/images/png6.png')} />
              <Image style={styles.memoryImage} source={require('src/assets/images/png7.png')} />
              <Image style={styles.memoryImage} source={require('src/assets/images/png8.png')} />
            </View>
            {type === 'primary' ? (
              <Pressable>
                <Text style={styles.allSeeText}>すべて見る</Text>
              </Pressable>
            ) : (
              <View style={styles.memoryContainer}>
                <Text style={styles.memoryText}>色々な方のその地の</Text>
                <Text style={styles.memoryText}>思い出を見られます。</Text>
              </View>
            )}
            {nextButton && (
              <View style={styles.nextButton}>
                <Pressable onPress={onPressDown}>
                  <PageButton />
                </Pressable>
                <View style={styles.nextButtonContainer}>
                  <Text style={styles.nextButtonText}>5/6</Text>
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
    marginTop: 20,
  },

  modalText: {
    color: GachaTravelColors.modalTextColor,
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    marginHorizontal: 14,
    padding: 18,
    fontFamily: 'Noto Sans',
  },

  modalWrapContent: {
    backgroundColor: GachaTravelColors.mainBgColor,
    paddingTop: 40,
    borderBottomEndRadius: 35,
    borderBottomStartRadius: 35,
    paddingBottom: 16,
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

  memoryWrap: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  memoryImage: {
    width: '33%',
    height: 80,
    marginVertical: 1,
  },

  card: {
    backgroundColor: GachaTravelColors.memoryModalBgColor,
    borderColor: GachaTravelColors.memoryCardBorderColor,
    borderWidth: 3,
    paddingHorizontal: 3,
    paddingBottom: 3,
    borderRadius: 40,
    position: 'relative',
  },

  memoryText: {
    color: GachaTravelColors.mainTextColor,
    fontSize: 18,
    fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    lineHeight: 23,
  },

  memoryContainer: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 16,
  },

  allSeeText: {
    color: GachaTravelColors.memoryModalColor,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 24,
    borderColor: GachaTravelColors.memoryModalColor,
  },

  nextButtonContainer: {
    backgroundColor: GachaTravelColors.memoryNextButtonBgColor,
    borderWidth: 1,
    borderColor: GachaTravelColors.memoryNextButtonColor,
    borderRadius: 5,
    marginTop: 6,
    height: 30,
    shadowColor: GachaTravelColors.memoryNextButtonColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 1,
  },

  nextButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
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
