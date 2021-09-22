import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

const Divider = ({ colors, dispatch, style, ...props }) => {
  return (
    <View
      style={{
        ...styles.divider,
        backgroundColor: colors.border,
        ...style
      }}
      {...props}
    />
  )
}

export default connect(state => ({
  colors: state.colors
}))(Divider);

const styles = StyleSheet.create({
  divider: {
    height: 1
  }
})
