import React from 'react';
import Video from 'react-native-video';
import {
  Dimensions,
  Image,
  StyleSheet,
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import splash from '../../assets/splashVideo.mp4';
import splashImage from '../../assets/emptySplashFlower.png';

const { height, width } = Dimensions.get('window');

const DURATION = 1.6;
const AppLoading = (props) => {
  handleProgress = ({ currentTime }) => {
    if(currentTime >= DURATION)
      props.onComplete();
  }

  const hideSplash = () => {
    SplashScreen.hide();
  }

  return (
    <>
      <Image
        source={splashImage}
        style={styles.video}
        resizeMode="cover"
      />
      <Video
        source={splash}
        style={styles.video}
        resizeMode="cover"
        onProgress={handleProgress}
        onLoad={hideSplash}
      />
    </>
  )
}

export default AppLoading;

const styles = StyleSheet.create({
  video: {
    height,
    width,
    position: 'absolute'
  }
})
