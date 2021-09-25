import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Text from '../../common/Text';

const StartNewConversation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hey! This page doesn't exist yet. Sorry!
      </Text>
    </View>
  )
}

export default StartNewConversation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 32
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  }
})
