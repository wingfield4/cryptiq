import React from 'react';
import Video from 'react-native-video';
import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native';

import splash from '../../assets/splashVideo.mp4';

const { height, width } = Dimensions.get('window');

const DURATION = 1.6;
const AppLoading = (props) => {
  handleProgress = ({ currentTime }) => {
    if(currentTime >= DURATION)
      props.onComplete();
  }

  return (
    <Video
      source={splash}
      style={styles.video}
      resizeMode="cover"
      onProgress={handleProgress}
    />
  )
}

export default AppLoading;

const styles = StyleSheet.create({
  video: {
    height,
    width
  }
})
