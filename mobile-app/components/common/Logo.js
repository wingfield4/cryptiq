import React from 'react';
import Video from 'react-native-video';
import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native';

import hexFullDarkBlue from '../../assets/crypticBannerNew.mp4';

const { width } = Dimensions.get('window');

const Logo = () => {
  return (
    <Video
      source={hexFullDarkBlue}
      style={styles.video}
    />
  )
}

export default Logo;

const styles = StyleSheet.create({
  video: {
    height: width*.740740740,
    alignSelf: 'stretch'
  }
})
