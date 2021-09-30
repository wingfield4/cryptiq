import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

import Loading from './Loading';

const LoadingOverlay = ({ colors, dispatch, style, ...props}) => {
  return (
    <View
      style={[
        styles.container,
        style
      ]}
      {...props}
    >
      <Loading
        color="white"
        size="large"
      />
    </View>
  )
}

export default connect(state => ({
  colors: state.colors
}))(LoadingOverlay);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, .64)',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
