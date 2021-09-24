import React from 'react';
import { 
  NavigationContainer as RNNavigationContainer,
  DefaultTheme
} from '@react-navigation/native';
import { connect } from 'react-redux';

const NavigationContainer = ({ colorMode, colors, dispatch, ...props }) => {
  const theme = {
    ...DefaultTheme,
    dark: colorMode === 'dark',
    colors: {
      primary: colors.accent5,
      background: colors.pageBackground,
      card: colors.header,
      text: colors.text,
      border: colors.border,
      notification: colors.accent3
    }
  };

  return (
    <RNNavigationContainer theme={theme} {...props} />
  )
}

export default connect(state => ({
  colorMode: state.colorMode,
  colors: state.colors
}))(NavigationContainer);
