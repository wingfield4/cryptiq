import db from '../../db';
import store from '../../utilities/store';

const addMessage = async (message) => {
  await db.executeSql(`
    INSERT INTO message (
      id, 
      encryptedContent, 
      sentAt, 
      sentFrom,
      sentTo,
      receivedAt,
      readAt
    )
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `, [
    message.id,
    message.encryptedContent,
    message.sentAt,
    message.sentFrom,
    message.sentTo,
    message.receivedAt,
    message.readAt
  ]);

  const { messageListeners } = store.getState();
  Object.keys(messageListeners).forEach(key => {
    if(messageListeners[key])
      messageListeners[key](message);
  })
}

export default addMessage;
