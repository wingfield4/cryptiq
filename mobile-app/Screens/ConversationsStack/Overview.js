import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ConversationList from '../../components/messages/ConversationList';
import PageContainer from '../../components/common/PageContainer';

import generateId from '../../utilities/generateId';
import getAllUsers from '../../db/users/getAllUsers';

const Overview = (props) => {
  const [users, setUsers] = useState(null);
  const [activeListenerId] = useState(generateId());

  /* ADD AND UPDATE OUR EVENT AS NECCESSARY */
  useEffect(() => {
    const handleAddMessage = (message) => {
      if(!users)
        return;
  
      /* TODO handle case where message is from or to new user */
      setUsers(users.map(user => ({
        ...user,
        messageCount: message.sentFrom === user.id || message.sentTo === user.id ? user.messageCount + 1 : user.messageCount
      })));
    }

    if(activeListenerId) {
      props.dispatch({
        type: 'addMessageListener',
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
          type: 'removeMessageListener',
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
    </PageContainer>
  )
}

export default connect()(Overview);
