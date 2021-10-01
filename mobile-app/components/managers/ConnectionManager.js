import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import addMessage from '../../db/messages/addMessage';
import decryptMessage from '../../utilities/crypto/decryptMessage';
import encryptMessage from '../../utilities/crypto/encryptMessage';
import eventType from '../../utilities/eventType';
import generateId from '../../utilities/generateId';
import getAllUsers from '../../db/users/getAllUsers';
import updateMessage from '../../db/messages/updateMessage';

/*
  TODO maintain socket connection with server
  listen for and handle events like:
    - receive message
    - delivery receipt
    - read receipt
*/
const ConnectionManager = ({ currentUser }) => {
  useEffect(() => {
    const handleAddMessage = async (message) => {
      await addMessage({
        ...message,
        content: await decryptMessage(message.encryptedContent)
      });
    }

    const handleUpdateMessage = async (message) => {
      await updateMessage(message);
    }

    const handleEvent = (e) => {
      switch(e.type) {
        case eventType.NEW_MESSAGE:
          handleAddMessage(e.message);
          break;
        case eventType.UPDATE_MESSAGE:
          handleUpdateMessage(e.message);
          break;
        default:
          console.log('Unrecognized Event');
      }
    }

    //TODO open socket connection
    const FAKE_EVENT_INTERVAL = 15000;
    const fakeEvent = async () => {
      let allUsers = await getAllUsers();

      handleEvent({
        type: eventType.NEW_MESSAGE,
        message: {
          id: generateId(),
          sentAt: moment().format(),
          sentFrom: allUsers[0].id,
          sentTo: currentUser.id,
          encryptedContent: await encryptMessage('asdkfjahsf', currentUser.publicKey)
        }
      });

      setTimeout(fakeEvent, FAKE_EVENT_INTERVAL);
    }

    setTimeout(fakeEvent, FAKE_EVENT_INTERVAL);

    return () => {
      //end socket connection
    }
  }, [currentUser]);

  return (
    <></>
  )
}

export default connect(state => ({
  currentUser: state.currentUser
}))(ConnectionManager);
