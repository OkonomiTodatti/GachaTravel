import React, { memo, useEffect, useRef, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createStock } from '../../graphql/mutations';
import { useLoginUser } from '../../provider/LoginUserProvider';
import { StyleSheet, View, Dimensions } from 'react-native';
import Video from 'react-native-video';
import Gvideo from '../../assets/Ggacha.mp4';
import Rvideo from '../../assets/Rgacha.mp4';
import Bvideo from '../../assets/Bgacha.mp4';
import Yvideo from '../../assets/Ygacha.mp4';

const { width, height } = Dimensions.get('window');

export const GachaAnimationPage = memo((props) => {
  const { navigation } = props;
  const lottieRef = useRef();
  const [gachaState] = useState(true);
  const { loginUser } = useLoginUser();
  const resetAnimation = () => {
    if (lottieRef.current) {
      lottieRef.current.reset();
      lottieRef.current.play();
    }
  };
  let flag = Math.floor(Math.random() * (4 + 1 - 1)) + 1;
  const videoComponents = {
    1: Rvideo,
    2: Gvideo,
    3: Yvideo,
    4: Bvideo,
  };

  const colorArray = {
    1: 'R',
    2: 'G',
    3: 'Y',
    4: 'B',
  };

  const video = videoComponents[flag];

  useEffect(() => {
    if (lottieRef.current) {
      if (gachaState) {
        lottieRef.current.play(0, 119);
      } else {
        lottieRef.current.play(119, 119);
      }
    }
  }, [lottieRef, gachaState]);

  setTimeout(() => {
    fetchCreateStock({
      user_id: loginUser,
      ticket_id: Math.round(Math.random() * 3 + 1),
      plan_id: '1',
      status: 'Before',
      color: colorArray[flag],
      people: '1',
    }).then(() => navigation.navigate('GachaResult'));
  }, 10 * 1000);

  async function fetchCreateStock(stockDatas) {
    try {
      await API.graphql(graphqlOperation(createStock, { input: stockDatas }));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={{ position: 'relative' }}>
      <Video
        source={video}
        ref={(ref) => {
          this.player = ref;
        }}
        onError={this.videoError}
        style={styles.backgroundVideo}
        fullscreen={true}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  backgroundVideo: {
    alignSelf: 'center',
    width: width,
    height: height,
  },
});
