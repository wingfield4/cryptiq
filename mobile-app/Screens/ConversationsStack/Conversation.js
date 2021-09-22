import React, { useEffect, useState } from 'react';
import { LayoutAnimation } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import moment from 'moment';

import BackButton from '../../components/common/BackButton';
import MessageInput from '../../components/messages/MessageInput';
import MessageList from '../../components/messages/MessageList';
import PageContainer from '../../components/common/PageContainer';
import Text from '../../components/common/Text';

import addMessage from '../../db/messages/addMessage';
import generateId from '../../utilities/generateId';
import getMessagesFromUser from '../../db/messages/getMessagesFromUser';

const Conversation = (props) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState(null);
  const [activeListenerId] = useState(generateId());
  const navigation = useNavigation();

  /* CONTROL BACK BUTTON IN HEADER */
  useEffect(() => {
    console.log('hereakjsdbfiahjbdsf');

    //add an animation cause it's fun
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        300,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.opacity
      )
    );

    //set up back button
    navigation.getParent().setOptions(({
      headerLeft: () => <BackButton />
    }));

    //remove back button on unmount
    return () => {
      navigation.getParent().setOptions(({
        headerLeft: null
      }));
    }
  }, []);

  /* ADD AND UPDATE OUR EVENT AS NECCESSARY */
  useEffect(() => {
    const handleAddMessage = (message) => {
      if(!messages)
        return;

      /* apply animation for adding message to our list */
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          300,
          LayoutAnimation.Types.easeInEaseOut,
          LayoutAnimation.Properties.opacity
        )
      );
  
      /* update our state */
      setMessages([message, ...messages]);
    }

    if(activeListenerId) {
      props.dispatch({
        type: 'addMessageListener',
        id: activeListenerId,
        onAddMessage: handleAddMessage
      });
    }
  }, [activeListenerId, props.dispatch, setMessages, messages])

  /* KILL THE EVENT WHEN WE UNMOUNT */
  useEffect(() => {
    return () => {
      if(activeListenerId) {
        props.dispatch({
          type: 'removeMessageListener',
          id: activeListenerId
        });
      }
    }
  }, [activeListenerId])

  /* LOAD OUR MESSAGES */
  useEffect(async () => {
    const userId = props.route.params.userId;
    if(userId) {
      let messages = await getMessagesFromUser(userId);
      setLoading(false);
      setMessages(messages);
    } else {
      setLoading(false);
      setError('Invalid User Id');
    }
  }, []);

  const handleSend = (content) => {
    /* TODO handle ecryption and api call */

    /* build our message */
    const message = {
      id: generateId(), //TODO random id
      encryptedContent: content, //TODO encryption
      sentAt: moment().format(),
      sentFrom: props.currentUser.id,
      sentTo: props.route.params.userId
    }

    /* update our db */
    addMessage(message).then(res => {
      //do something?
    }).catch(err => {
      console.log(err);
      //retry?
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
