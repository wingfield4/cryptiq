import React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput
} from 'react-native';
import { connect } from 'react-redux';

const TextInput = ({ colors, dispatch, style, ...props}) => {
  return (
    <RNTextInput
      style={{
        ...styles.textInput,
        color: colors.text,
        ...style
      }}
      placeholderTextColor={colors.captionText}
      {...props}
    />
  )
}

export default connect(state => ({
  colors: state.colors
}))(TextInput);

const styles = StyleSheet.create({
  textInput: {
    
  }
})
