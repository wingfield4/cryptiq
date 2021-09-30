import React, { useEffect, useState } from 'react';
import { LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import ConversationList from '../../../components/messages/ConversationList';
import NewConversationButton from '../../../components/messages/NewConversationButton';
import NoConversations from '../../../components/messages/NoConversations';
import PageContainer from '../../../components/common/PageContainer';

import generateId from '../../../utilities/generateId';
import getAllUsers from '../../../db/users/getAllUsers';
import readMessagesFromUser from '../../../db/messages/readMessagesFromUser';

const Overview = (props) => {
  const [users, setUsers] = useState(null);
  const [newMessageListenerId] = useState(generateId());
  const [readMessageListenerId] = useState(generateId());

  /* ADD AND UPDATE OUR EVENT AS NECCESSARY */
  useEffect(() => {
    const handleAddMessage = async (message) => {
      let newUsers = [];

      if(users) {
        //udpate existing users
        newUsers = users.map(user => ({
          ...user,
          messageCount: message.sentFrom === user.id || message.sentTo === user.id ? user.messageCount + 1 : user.messageCount,
          unreadMessageCount: message.sentFrom === user.id || message.sentTo === user.id ? user.unreadMessageCount + 1 : user.unreadMessageCount,
          mostRecentInteraction: message.sentFrom === user.id || message.sentTo === user.id ? moment().format() : user.mostRecentInteraction
        }));
      }
  
      /* TODO handle case where message is from or to new user */
      if(!newUsers.find(u => u.id === message.sentFrom || u.id === message.sentTo)) {
        newUsers = await getAllUsers();
      }

      // sort by most recent insteraction
      newUsers.sort((a, b) => {
        if(moment(a.mostRecentInteraction).isAfter(moment(b.mostRecentInteraction))) return -1;
        if(moment(b.mostRecentInteraction).isAfter(moment(a.mostRecentInteraction))) return 1;
        return 0;
      });

      setUsers(newUsers);
    }

    const handleReadMessage = (userId) => {
      //update the state here to reflect viewed messages
      setUsers(users.map(user => {
        if(user.id === userId)
          return { ...user, unreadMessageCount: 0 }

        return user;
      }));
    }

    if(newMessageListenerId) {
      props.dispatch({
        type: 'addNewMessageListener',
        id: newMessageListenerId,
        onAddMessage: handleAddMessage
      });
    }

    if(readMessageListenerId) {
      props.dispatch({
        type: 'addReadMessageListener',
        id: readMessageListenerId,
        onAddMessage: handleReadMessage
      });
    }
  }, [newMessageListenerId, props.dispatch, setUsers, users])

  /* KILL THE EVENT WHEN WE UNMOUNT */
  useEffect(() => {
    return () => {
      if(newMessageListenerId) {
        props.dispatch({
          type: 'removeNewMessageListener',
          id: newMessageListenerId
        });
      }
      if(readMessageListenerId) {
        props.dispatch({
          type: 'removeReadMessageListenerId',
          id: newMessageListenerId
        });
      }
    }
  }, [newMessageListenerId, readMessageListenerId])

  /* load users */
  useEffect(async () => {
    let newUsers = await getAllUsers();
    setUsers(newUsers);
  }, [])

  return (
    <PageContainer>
      {users &&
        <ConversationList
          users={users}
        />
      }
      <NewConversationButton />
    </PageContainer>
  )
}

export default connect()(Overview);
