import React from 'react';
import {
  Switch as RNSwitch
} from 'react-native';
import { connect } from 'react-redux';

const Switch = ({ colors, dispatch, ...props }) => {
  return (
    <RNSwitch
      trackColor={{ true: colors.accent1 }}
      {...props}
    />
  )
}

export default connect(state => ({
  colors: state.colors
}))(Switch);
