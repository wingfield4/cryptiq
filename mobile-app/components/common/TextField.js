import React, { useRef } from 'react';
import {
  StyleSheet,
  Pressable,
  View
} from 'react-native';
import { connect } from 'react-redux';

import TextInput from './TextInput';

const TextField = ({ colors, containerStyle, dispatch, ...props }) => {
  const textInput = useRef(null);

  return (
    <Pressable
      style={{
        ...styles.container,
        borderColor: colors.border,
        ...containerStyle
      }}
      onPress={() => {
        if(textInput)
          textInput.current.focus();
      }}
    >
      <TextInput
        ref={textInput}
        {...props}
      />
    </Pressable>
  )
}

export default connect(state => ({
  colors: state.colors
}), null, null, { forwardRef: true })(TextField);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  }
})
