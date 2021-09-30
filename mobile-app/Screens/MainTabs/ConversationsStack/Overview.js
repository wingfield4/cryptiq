import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import ConversationList from '../../../components/messages/ConversationList';
import NewConversationButton from '../../../components/messages/NewConversationButton';
import NoConversations from '../../../components/messages/NoConversations';
import PageContainer from '../../../components/common/PageContainer';

import generateId from '../../../utilities/generateId';
import getAllUsers from '../../../db/users/getAllUsers';

const Overview = (props) => {
  const [users, setUsers] = useState(null);
  const [activeListenerId] = useState(generateId());

  /* ADD AND UPDATE OUR EVENT AS NECCESSARY */
  useEffect(() => {
    const handleAddMessage = (message) => {
      if(!users)
        return;
  
      /* TODO handle case where message is from or to new user */

      //udpate existing users
      let newUsers = users.map(user => ({
        ...user,
        messageCount: message.sentFrom === user.id || message.sentTo === user.id ? user.messageCount + 1 : user.messageCount,
        mostRecentInteraction: message.sentFrom === user.id || message.sentTo === user.id ? message.sentAt : user.mostRecentInteraction
      }));

      // sort by most recent insteraction
      newUsers.sort((a, b) => {
        if(moment(a.mostRecentInteraction).isAfter(moment(b.mostRecentInteraction))) return -1;
        if(moment(b.mostRecentInteraction).isAfter(moment(a.mostRecentInteraction))) return 1;
        return 0;
      });

      setUsers(newUsers);
    }

    if(activeListenerId) {
      props.dispatch({
        type: 'addNewMessageListener',
        id: activeListenerId,
        onAddMessage: handleAddMessage
      });
    }
  }, [activeListenerId, props.dispatch, setUsers, users])

  /* KILL THE EVENT WHEN WE UNMOUNT */
  useEffect(() => {
    return () => {
      if(activeListenerId) {
        props.dispatch({
          type: 'removeNewMessageListener',
          id: activeListenerId
        });
      }
    }
  }, [activeListenerId])

  /* load users */
  useEffect(async () => {
    let newUsers = await getAllUsers();
    setUsers(newUsers);
  }, [])

  return (
    <PageContainer>
      {users &&
        <ConversationList users={users} />
      }
      <NewConversationButton />
    </PageContainer>
  )
}

export default connect()(Overview);
