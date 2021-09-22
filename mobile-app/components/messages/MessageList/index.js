import React from 'react';
import {
  FlatList
} from 'react-native';

import Message from './Message';

const MessageList = (props) => {

  return (
    <FlatList
      inverted
      data={props.messages}
      renderItem={({ item }) => <Message message={item} />}
      keyExtractor={item => item.id}
    />
  )
}

export default MessageList;
