import React from 'react';
import {
  Text as RNText,
} from 'react-native';
import { connect } from 'react-redux';

const Text = (props) => {
  const { 
    caption, 
    colors, 
    error,
    fontMultiplier,
    allowScaling,
    style, 
    children,
    ...rest 
  } = props;
  
  return (
    <RNText
      style={[
        {
          color: caption ? colors.captionText : error ? colors.error : colors.text,
          fontSize: allowScaling ? 14*fontMultiplier : 14
        },
        style
      ]}
      {...rest}
    >
      {children}
    </RNText>
  )
}

export default connect(state => ({
  colors: state.colors,
  colorMode: state.colorMode,
  fontMultiplier: state.fontMultiplier
}))(Text);
