import React, { memo, useEffect, useRef, useState } from 'react';
import LottieView from 'lottie-react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { createStock } from '../../graphql/mutations';
import { useLoginUser } from '../../provider/LoginUserProvider';
import { StyleSheet, Text, View, LogBox, Dimensions } from 'react-native';
import Video from 'react-native-video';
import Gvideo from '../../assets/Ggacha.mp4';
import Rvideo from '../../assets/Rgacha.mp4';
import Bvideo from '../../assets/Bgacha.mp4';
import Yvideo from '../../assets/Ygacha.mp4';

const { width, height } = Dimensions.get('window');

export const GachaAnimationPage = memo((props) => {
  const { navigation } = props;
  const lottieRef = useRef();
  const [gachaState, setGachaState] = useState(true);
  const [visible, setVisible] = useState(true);
  const { loginUser, setGachaFlag } = useLoginUser();
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
    // setGachaState(false);
    // setGachaFlag(false);
    fetchCreateStock({
      user_id: loginUser,
      ticket_id: Math.round(Math.random() * 3 + 1),
      plan_id: '1',
      status: 'Before',
      color: colorArray[flag],
      people: '1',
    }).then(() => navigation.navigate('GachaResult'));
    // navigation.navigate('GachaResult');
    // navigation.navigate('GachaResult');
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
      {/*<Text>こんにちは</Text>*/}
      {/*<Video*/}
      {/*  source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1' }}*/}
      {/*  style={{ width: 300, height: 300 }}*/}
      {/*  controls={true}*/}
      {/*  audioOnly={true}*/}
      {/*  poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_Cocker_Spaniel_4.jpg/800px-English_Cocker_Spaniel_4.jpg"*/}
      {/*  ref={(ref) => {*/}
      {/*    this.player = ref;*/}
      {/*  }}*/}
      {/*/>*/}

      {/*<Video*/}
      {/*  source={video}*/}
      {/*  style={{ width: 300, height: 300 }}*/}
      {/*  audioOnly={true}*/}
      {/*  controls={true}*/}
      {/*  poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_Cocker_Spaniel_4.jpg/800px-English_Cocker_Spaniel_4.jpg"*/}
      {/*  ref={(ref) => {*/}
      {/*    this.player = ref;*/}
      {/*  }}*/}
      {/*/>*/}

      <Video
        source={video}
        ref={(ref) => {
          this.player = ref;
        }} // Store reference
        // onBuffer={this.onBuffer} // Callback when remote video is buffering
        onError={this.videoError}
        style={styles.backgroundVideo}
        fullscreen={true}
      />
      {/*<Overlay isVisible={visible} style={{ height: '100%', width: '80%' }}>*/}
      {/*  <LottieView*/}
      {/*    ref={lottieRef}*/}
      {/*    loop={false}*/}
      {/*    style={{*/}
      {/*      width: 300,*/}
      {/*      height: 200,*/}
      {/*      left: -45,*/}
      {/*      top: -25,*/}
      {/*      backgroundColor: '#919191',*/}
      {/*      // backgroundColor:'rgba(145, 145, 145, .1)',*/}
      {/*      flex: 1,*/}
      {/*      position: 'absolute',*/}
      {/*    }}*/}
      {/*    source={require('../../assets/gacha.json')}*/}
      {/*    resizeMode="cover"*/}
      {/*  />*/}
      {/*</Overlay>*/}
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
