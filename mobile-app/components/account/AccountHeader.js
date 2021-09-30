import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

const AccountHeader = ({ colors, dispatch, ...props }) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.highlightBackground }
      ]}
      {...props}
    >

    </View>
  )
}

export default connect(state => ({
  colors: state.colors
}))(AccountHeader);

const styles = StyleSheet.create({
  container: {
    height: 128,
    borderRadius: 8
  }
})
