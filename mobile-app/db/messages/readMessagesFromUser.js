import moment from 'moment';

import db from '../../db';
import store from '../../utilities/store';

const readMessagesFromUser = async (userId) => {
  await db.executeSql(`
    UPDATE message
    SET readAt = ?
    WHERE message.sentFrom = ?
  `, [
    moment().format(),
    userId
  ]);

  const { readMessageListeners } = store.getState();
  Object.keys(readMessageListeners).forEach(key => {
    if(readMessageListeners[key])
      readMessageListeners[key](userId);
  })
}

export default readMessagesFromUser;
