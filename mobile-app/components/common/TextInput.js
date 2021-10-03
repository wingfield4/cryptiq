import React from 'react';
import {
  Platform,
  StyleSheet,
  TextInput as RNTextInput
} from 'react-native';
import { connect } from 'react-redux';

const TextInput = React.forwardRef(({ colors, dispatch, style, multiline, ...props }, ref) => {
  return (
    <RNTextInput
      style={[
        styles.textInput,
        { color: colors.text, marginBottom: Platform.OS === 'android' && !multiline ? -8 : 0 },
        style
      ]}
      ref={ref}
      placeholderTextColor={colors.captionText}
      multiline={multiline}
      {...props}
    />
  )
})

export default connect(state => ({
  colors: state.colors
}), null, null, { forwardRef: true })(TextInput);

const styles = StyleSheet.create({
  textInput: {
    padding: 0,
    textAlignVertical: 'top'
  }
})
