import React from 'react';
import {
  StatusBar
} from 'react-native'
import { connect } from 'react-redux';

const StatusBarManager = (props) => {
  return (
    <StatusBar
      barStyle={props.colorMode === 'dark' ? 'light-content' : 'dark-content'}
    />
  )
}

export default connect(state => ({
  colorMode: state.colorMode,
}))(StatusBarManager);
