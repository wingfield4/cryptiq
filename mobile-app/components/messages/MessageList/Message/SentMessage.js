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

const SentMessage = (props) => {
  const { height, width } = Dimensions.get('window');

  const getTimestampText = () => {
    const { message } = props;

    if(message.readAt)
      return `Read ${formatMessageDate(props.message.readAt)}`;

    if(message.receivedAt)
      return `Delievered ${formatMessageDate(props.message.receivedAt)}`;
    
    if(message.sentAt)
        return `Sent ${formatMessageDate(props.message.sentAt)}`;

    return 'Sending...';
  }

  return (
    <>
      <Text
        style={{
          ...styles.dateText,
          color: props.colors.captionText
        }}
      >
        {getTimestampText()}
      </Text>
      <View style={styles.outerContainer}>
        <View style={styles.spacer} />
        <TouchableOpacity
          style={{
            ...styles.container,
            backgroundColor: props.colors.accent5
          }}
        >
          <Text
            style={{
              ...styles.messageText,
              color: props.colors.accent3Text
            }}
          >
            {props.message.content}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default connect(state => ({
  colors: state.colors
}))(SentMessage);

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexShrink: 1,
    borderRadius: 8
  },
  dateText: {
    fontSize: 12,
    marginBottom: 8,
    marginRight: 16,
    alignSelf: 'flex-end'
  },
  messageText: {

  },
  outerContainer: {
    justifyContent: 'flex-end',
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 2,
    flexDirection: 'row'
  },
  spacer: {
    minWidth: 80
  }
})
