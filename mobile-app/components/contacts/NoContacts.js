import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

import Icon from '../common/Icon';
import Text from '../common/Text';

const NoConversations = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        No contacts yet
      </Text>
      <Text style={styles.subtitle}>
        Press <Icon name="plus" size={18} /> to add a new one!
      </Text>
    </View>
  )
}

export default connect(state => ({
  colors: state.colors
}))(NoConversations);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32
  },
  subtitle: {
    textAlign: 'center'
  },
  title: {
    fontSize: 32,
    textAlign: 'center'
  }
})
