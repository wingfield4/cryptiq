import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

import Icon from '../common/Icon';

const { width } = Dimensions.get('window');

const ProfilePicture = ({ colors, currentUser, dispatch, ...props }) => {
  return (
    <View
      style={[
        styles.container,
        { 
          backgroundColor: colors.widgetBackground,
          borderColor: colors.pageBackground
        }
      ]}
      {...props}
    >
      <Icon name="account" size={128} />
    </View>
  )
}

export default connect(state => ({
  colors: state.colors,
  currentUser: state.currentUser
}))(ProfilePicture);


const CIRCLE_DIAMETER = 184;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: CIRCLE_DIAMETER,
    width: CIRCLE_DIAMETER,
    borderRadius: CIRCLE_DIAMETER/2,
    top: 48,
    left: width/2 - CIRCLE_DIAMETER/2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4
  }
})
