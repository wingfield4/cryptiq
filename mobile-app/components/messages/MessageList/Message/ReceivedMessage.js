import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';

import Text from '../../../common/Text';

import formatMessageDate from '../../../../utilities/formatMessageDate';

const ReceivedMessage = (props) => {
  const { height, width } = Dimensions.get('window');

  return (
    <>
      <Text
        style={{
          ...styles.dateText,
          color: props.colors.captionText
        }}
      >
        Received {formatMessageDate(props.message.sentAt)}
      </Text>
      <View style={styles.outerContainer}>
        <TouchableOpacity
          style={{
            ...styles.container,
            backgroundColor: props.colors.accent3
          }}
        >
          <Text
            style={{
              ...styles.messageText,
              color: props.colors.accent3Text
            }}
          >
            {props.message.encryptedContent}
          </Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
      </View>
    </>
  )
}

export default connect(state => ({
  colors: state.colors
}))(ReceivedMessage);

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexShrink: 1,
    borderRadius: 8
  },
  dateText: {
    fontSize: 12,
    marginBottom: 8,
    marginLeft: 16
  },
  messageText: {

  },
  outerContainer: {
    justifyContent: 'flex-start',
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 2,
    flexDirection: 'row'
  },
  spacer: {
    minWidth: 80
  }
})
