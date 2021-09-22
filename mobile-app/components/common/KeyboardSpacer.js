import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  Keyboard,
  View
} from 'react-native';

const KeyboardSpacer = () => {
  const height = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    const showKeyboard = (e) => {
      Animated.timing(height, {
        toValue: e.endCoordinates.height - 80,
        duration: 225,

        useNativeDriver: false
      }).start();
    }

    const hideKeyboard = () => {
      Animated.timing(height, {
        toValue: 0,
        duration: 225,

        useNativeDriver: false
      }).start();
    }

    const showListener = Keyboard.addListener('keyboardWillShow', showKeyboard);
    const hideListener = Keyboard.addListener('keyboardWillHide', hideKeyboard);

    return () => {
      showListener.remove();
      hideListener.remove();
    }
  }, []);

  return (
    <Animated.View
      style={{ 
        height
      }}
    />
  )
}

export default KeyboardSpacer;
