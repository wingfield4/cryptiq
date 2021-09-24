import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';

import Text from './Text';

const BigButton = ({ 
  colors,
  disabled,
  dispatch,
  label,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: disabled ? colors.pageBackground : colors.accent5,
        borderWidth: 1,
        borderColor: disabled ? colors.border : colors.pageBackground,
        ...style
      }}
      disabled={disabled}
      {...props}
    >
      <Text
        style={{
          ...styles.label,
          color: colors.accent5Text
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default connect(state => ({
  colors: state.colors
}))(BigButton);

const styles = StyleSheet.create({
  container: {
    width: '70%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28
  },
  label: {
    fontSize: 18,
    textAlign: 'center'
  }
});
