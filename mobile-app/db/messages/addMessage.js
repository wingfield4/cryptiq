import db from '../../db';
import store from '../../utilities/store';

const addMessage = async (message) => {
  await db.executeSql(`
    INSERT INTO message (
      id, 
      content, 
      sentAt, 
      sentFrom,
      sentTo,
      receivedAt,
      readAt
    )
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `, [
    message.id,
    message.content,
    message.sentAt,
    message.sentFrom,
    message.sentTo,
    message.receivedAt,
    message.readAt
  ]);

  const { newMessageListeners } = store.getState();
  Object.keys(newMessageListeners).forEach(key => {
    if(newMessageListeners[key])
      newMessageListeners[key](message);
  })
}

export default addMessage;
