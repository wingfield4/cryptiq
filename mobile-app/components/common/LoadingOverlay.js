import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

const Loading = ({ colors, dispatch, style, ...props}) => {
  return (
    <View
      style={[
        styles.container,
        style
      ]}
      {...props}
    >
      <ActivityIndicator
        color="white"
        size="large"
      />
    </View>
  )
}

export default connect(state => ({
  colors: state.colors
}))(Loading);

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
