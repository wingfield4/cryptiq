import React from 'react';
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

const Icon = ({ colors, dispatch, ...props }) => {
  return (
    <RNIcon
      color={colors.text}
      {...props}
    />
  )
}

export default connect(state => ({
  colors: state.colors
}))(Icon);
