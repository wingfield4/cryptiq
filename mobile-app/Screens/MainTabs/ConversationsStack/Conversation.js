import React, { useEffect, useState } from 'react';
import { LayoutAnimation } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import moment from 'moment';

import BackButton from '../../../components/common/BackButton';
import MessageInput from '../../../components/messages/MessageInput';
import MessageList from '../../../components/messages/MessageList';
import PageContainer from '../../../components/common/PageContainer';
import Text from '../../../components/common/Text';

import generateId from '../../../utilities/generateId';
import getMessagesFromUser from '../../../db/messages/getMessagesFromUser';
import formatName from '../../../utilities/formatName';
import readMessagesFromUser from '../../../db/messages/readMessagesFromUser';
import sendMessage from '../../../utilities/sendMessage';

const Conversation = (props) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState(null);
  const [newMessageListenerId] = useState(generateId());
  const [updateMessageListenerId] = useState(generateId());
  const navigation = useNavigation();
  const user = props.route.params.user;

  /* CONTROL BACK BUTTON IN HEADER */
  useEffect(() => {
    if(user)
      navigation.getParent().setOptions({ headerTitle: formatName(user) });

    //add an animation cause it's fun
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        300,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.opacity
      )
    );

    navigation.getParent().setOptions({
      headerLeft: () => <BackButton />
    });

    //remove back button on unmount
    return () => {
      navigation.getParent().setOptions(({
        headerLeft: null,
        headerTitle: undefined
      }));
    }
  }, []);

  /* NEW MESSAGE EVENT */
  useEffect(() => {
    const handleAddMessage = (message) => {
      if(!messages || (message.sentFrom !== user.id && message.sentTo !== user.id))
        return;

      /* apply animation for adding message to our list */
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          300,
          LayoutAnimation.Types.easeInEaseOut,
          LayoutAnimation.Properties.opacity
        )
      );

      readMessagesFromUser(user.id);
  
      /* update our state */
      setMessages([message, ...messages]);
    }

    if(newMessageListenerId) {
      props.dispatch({
        type: 'addNewMessageListener',
        id: newMessageListenerId,
        onAddMessage: handleAddMessage
      });
    }
  }, [newMessageListenerId, props.dispatch, setMessages, messages])

  /* UPDATE MESSAGE EVENT */
  useEffect(() => {
    const handleUpdateMessage = (updatedMessage) => {
      if(!messages)
        return;
  
      /* update our state */
      setMessages(messages.map(message => {
        if(message.id === updatedMessage.id) {
          return {
            ...message,
            ...updatedMessage
          }
        }

        return message;
      }));
    }

    if(updateMessageListenerId) {
      props.dispatch({
        type: 'addUpdateMessageListener',
        id: updateMessageListenerId,
        onAddMessage: handleUpdateMessage
      });
    }
  }, [updateMessageListenerId, props.dispatch, setMessages, messages])

  /* KILL THE EVENT WHEN WE UNMOUNT */
  useEffect(() => {
    return () => {
      if(newMessageListenerId) {
        props.dispatch({
          type: 'removeNewMessageListener',
          id: newMessageListenerId
        });
      }
      
      if(updateMessageListenerId) {
        props.dispatch({
          type: 'removeUpdateMessageListener',
          id: updateMessageListenerId
        });
      }
    }
  }, [newMessageListenerId, updateMessageListenerId])

  /* LOAD OUR MESSAGES */
  useEffect(async () => {
    if(user) {
      readMessagesFromUser(user.id);
      let messages = await getMessagesFromUser(user.id);
      setLoading(false);
      setMessages(messages);
    } else {
      setLoading(false);
      setError('Invalid User Id');
    }
  }, []);

  const handleSend = async (content) => {
    //TODO handle errors
    await sendMessage({
      content,
      sender: props.currentUser,
      receiver: user
    });
  }

  return (
    <PageContainer>
      {error &&
        <>{/* TODO */}</>
      }
      {loading &&
        <>
          {/* TODO */}
          <Text>Loading</Text>
        </>
      }
      {!loading && messages &&
        <>
          <MessageList messages={messages} />
          <MessageInput onSend={handleSend} />
        </>
      }
    </PageContainer>
  )
}

export default connect(state => ({
  currentUser: state.currentUser
}))(Conversation);
