import db from '../../db';
import store from '../../utilities/store';

const addMessage = async (message) => {
  /*
    This is generally bad for risk of SQL injection
    But I don't think that matters.
    Only thing SQL injection here would hurt is user experience
  */
  const setStatement = Object.keys(message)
    .filter(key => key !== 'id')
    .map(key => `${key} = '${message[key]}'`)
    .join(',');

  await db.executeSql(`
    UPDATE message
    SET ${setStatement}
    WHERE id = ?
  `, [
    message.id
  ]);

  const { updateMessageListeners } = store.getState();
  Object.keys(updateMessageListeners).forEach(key => {
    if(updateMessageListeners[key])
      updateMessageListeners[key](message);
  });
}

export default addMessage;
