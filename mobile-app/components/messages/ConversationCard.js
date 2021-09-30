import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { useLinkProps } from '@react-navigation/native';

import Icon from '../common/Icon';
import Text from '../common/Text';

import formatName from '../../utilities/formatName';
import formatMessageDate from '../../utilities/formatMessageDate';

const ConversationCard = (props) => {
  const { onPress, ...linkProps } = useLinkProps({
    to: {
      screen: 'Conversation',
      params: { user: props.user }
    }
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: props.user.unreadMessageCount > 0 ? props.colors.highlightBackground : props.colors.widgetBackground
      }}
      {...linkProps}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.userName}>
          {formatName(props.user)}
        </Text>
        {/* <Text style={styles.messageCountText}>
          {props.user.messageCount} Messages
        </Text> */}
        <Text style={styles.messageCountText}>
          {formatMessageDate(props.user.mostRecentInteraction)}
        </Text>
      </View>
      {props.user.unreadMessageCount > 0 &&
        <View style={[styles.bubble, { backgroundColor: props.colors.accent5 }]}>
          <Text style={[styles.bubbleText, { color: props.colors.accent5Text }]}>
            {props.user.unreadMessageCount}
          </Text>
        </View>
      }
      <Icon name="chevron-right" size={32} />
    </TouchableOpacity>
  )
}

export default connect(state => ({
  colors: state.colors
}))(ConversationCard);

const styles = StyleSheet.create({
  bubble: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
    width: 36,
    borderRadius: 12
  },
  bubbleText: {
    fontSize: 12
  },
  container: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  messageCountText: {
    fontSize: 12
  },
  userName: {
    fontSize: 18
  }
})
