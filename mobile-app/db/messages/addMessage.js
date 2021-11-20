import db from '../../db';
import addUserIfNotExists from '../users/addUserIfNotExists';
import getUser from '../users/getUser';
import store from '../../utilities/store';

const addMessage = async (message) => {
  console.log('adding message', message);
  
  let sentTo = await addUserIfNotExists(message.sentTo);
  let sentFrom = await addUserIfNotExists(message.sentFrom);

  const addedMessage = {
    ...message,
    sentFrom: sentFrom.id,
    sentTo: sentTo.id
  }
  await db.executeSql(`
    INSERT INTO message (
      id,
      serverId,
      content, 
      sentAt, 
      sentFrom,
      sentTo,
      receivedAt,
      readAt
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `, [
    addedMessage.id,
    addedMessage.serverId,
    addedMessage.content,
    addedMessage.sentAt,
    addedMessage.sentFrom,
    addedMessage.sentTo,
    addedMessage.receivedAt,
    addedMessage.readAt
  ]);

  const { newMessageListeners } = store.getState();
  Object.keys(newMessageListeners).forEach(key => {
    if(newMessageListeners[key])
      newMessageListeners[key](addedMessage);
  })
}

export default addMessage;
