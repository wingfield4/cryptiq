import React from 'react';
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Icon from './Icon';
import Text from './Text';

const BackButton = (props) => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        style={{
          ...styles.container,
        }}
        onPress={navigation.goBack}
      >
        <Icon name="chevron-left" size={24} color={props.colors.headerText} />
        <Text>{props.prevScreenName || 'Back'}</Text>
      </TouchableOpacity>
    </>
  )
}

export default connect(state => ({
  colors: state.colors
}))(BackButton);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8
  }
});
