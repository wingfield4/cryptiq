import React from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';

const ColorManager = ({ colorMode, dispatch }) => {
  useEffect(async () => {
    let savedColorMode = await AsyncStorage.getItem('colorMode');
    
    if(savedColorMode) {
      dispatch({ type: 'setColorMode', mode: savedColorMode });
    } else {
      await AsyncStorage.setItem('colorMode', 'dark');
    }
  }, [])

  useEffect(() => {
    AsyncStorage.setItem('colorMode', colorMode);
  }, [colorMode])

  return (
    <></>
  )
}

export default connect(state => ({
  colorMode: state.colorMode
}))(ColorManager);
