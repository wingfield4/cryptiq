import React from 'react';
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import Icon from '../common/Icon';

const SendButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: props.colors.accent5
      }}
      onPress={props.onSend}
    >
      <Icon name="send" size={18} color={props.colors.accent1Text} />
    </TouchableOpacity>
  )
}

export default connect(state => ({
  colors: state.colors
}))(SendButton);

const styles = StyleSheet.create({
  container: {
    height: 28,
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    margin: 4,
    paddingLeft: 2
  }
})
