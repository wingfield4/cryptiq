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
        backgroundColor: props.colors.widgetBackground
      }}
      {...linkProps}
    >
      <View>
        <Text style={styles.userName}>
          {formatName(props.user)}
        </Text>
        <Text style={styles.messageCountText}>
          {props.user.messageCount} Messages
        </Text>
      </View>
      <Icon name="chevron-right" size={32} />
    </TouchableOpacity>
  )
}

export default connect(state => ({
  colors: state.colors
}))(ConversationCard);

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  messageCountText: {
    fontSize: 12
  },
  userName: {
    fontSize: 18
  }
})
