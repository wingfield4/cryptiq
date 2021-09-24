import React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput
} from 'react-native';
import { connect } from 'react-redux';

const TextInput = React.forwardRef(({ colors, dispatch, style, ...props }, ref) => {
  return (
    <RNTextInput
      style={{
        ...styles.textInput,
        color: colors.text,
        ...style
      }}
      ref={ref}
      placeholderTextColor={colors.captionText}
      {...props}
    />
  )
})

export default connect(state => ({
  colors: state.colors
}), null, null, { forwardRef: true })(TextInput);

const styles = StyleSheet.create({
  textInput: {
    
  }
})
