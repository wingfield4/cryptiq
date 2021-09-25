import React from 'react';
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

/* floating action button */
const FAB = ({ colors, dispatch, style, ...props }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { 
          backgroundColor: colors.accent5,
          shadowRadius: 8,
          shadowOpacity: .5,
          shadowColor: colors.accent5,
          shadowOffset: { height: 0, width: 0 },
          elevation: 8
        },
        style
      ]}
      {...props}
    />
  )
}

export default connect(state => ({
  colors: state.colors
}))(FAB);

const styles = StyleSheet.create({
  container: {
    height: 64,
    width: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 16,
    right: 16
  }
})
