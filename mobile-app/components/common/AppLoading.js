import React from 'react';
import Video from 'react-native-video';
import {
  Dimensions,
  StyleSheet
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import splash from '../../assets/splashVideoSingleFlower.mp4';

const { height, width } = Dimensions.get('window');

const DURATION = 1.5;
const AppLoading = (props) => {
  const handleProgress = ({ currentTime }) => {
    if(currentTime >= DURATION)
      props.onComplete();
  }

  const hideSplash = () => {
    SplashScreen.hide();
  }

  return (
    <>
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
