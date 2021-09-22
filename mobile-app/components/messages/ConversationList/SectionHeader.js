import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

import Text from '../../common/Text';

const SectionHeader = (props) => {
  return (
    <View 
      style={{
        ...styles.container,
        backgroundColor: props.colors.pageBackground
      }}
    >
      <Text style={{ color: props.colors.text }}>
        {props.title}
      </Text>
    </View>
  )
}

export default connect(state => ({
  colors: state.colors
}))(SectionHeader);

const styles = StyleSheet.create({
  container: {
    padding: 8
  }
})
