import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Text from '../common/Text';

const NoConversations = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        No users founds
      </Text>
    </View>
  )
}

export default NoConversations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32
  },
  title: {
    fontSize: 32,
    textAlign: 'center'
  }
})
