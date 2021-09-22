import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

const PageContainer = ({ colors, dispatch, style, ...props}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.pageBackground,
        ...style
      }}
      {...props}
    />
  )
}

export default connect(state => ({
  colors: state.colors
}))(PageContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
