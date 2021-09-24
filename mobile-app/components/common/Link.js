import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useLinkProps } from '@react-navigation/native';

const Link = ({ screen, params, ...props }) => {
  const linkProps = useLinkProps({
    to: {
      screen,
      params
    }
  });

  return (
    <TouchableOpacity
      {...linkProps}
      {...props}
    />
  )
}

export default Link;
