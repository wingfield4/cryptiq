import AsyncStorage from '@react-native-async-storage/async-storage';

import db from '../../db';

const getMessagesFromUser = async (userId) => {
  const thisUserId = await AsyncStorage.getItem('userId');

  console.log('userId', userId);
  console.log('thisUserId', thisUserId);

  //TODO HANDLE DYNAMIC LIMIT AND PAGINATION
  let messages = await db.executeSql(`
    SELECT 
      *
    FROM message m
    WHERE m.sentFrom = ? OR (m.sentFrom = ? AND m.sentTo = ?)
    ORDER BY m.sentAt desc
    LIMIT 100;
  `, [
    userId,
    thisUserId,
    userId
  ]);

  return messages;
}

export default getMessagesFromUser;
