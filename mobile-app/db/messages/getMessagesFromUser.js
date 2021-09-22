import AsyncStorage from '@react-native-async-storage/async-storage';

import db from '../../db';

const getMessagesFromUser = async (userId) => {
  const thisUserId = await AsyncStorage.getItem('userId');

  let messages = await db.executeSql(`
    SELECT 
      *
    FROM message m
    WHERE m.sentFrom = ? OR (m.sentFrom = ? AND m.sentTo = ?)
    ORDER BY m.sentAt desc;
  `, [
    userId,
    thisUserId,
    userId
  ]);

  return messages;
}

export default getMessagesFromUser;
