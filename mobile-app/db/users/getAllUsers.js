import AsyncStorage from '@react-native-async-storage/async-storage';

import db from '../../db';

const getAllUsers = async () => {
  const thisUserId = await AsyncStorage.getItem('userId');

  let users = await db.executeSql(`
    SELECT 
      *,

      ( SELECT count(1)
        FROM message m
        WHERE m.sentFrom = u.id OR (m.sentFrom = ? AND m.sentTo = u.id)
      ) as messageCount,

      ( SELECT count(1)
        FROM message m
        WHERE (m.sentFrom = u.id OR (m.sentFrom = ? AND m.sentTo = u.id)) AND m.readAt = null
      ) as unreadMessageCount,

      ( SELECT m.sentAt
        FROM message m
        WHERE m.sentFrom = u.id OR (m.sentFrom = ? AND m.sentTo = u.id)
        ORDER BY m.sentAt desc
        LIMIT 1
      ) as mostRecentInteraction
    FROM user u
    ORDER BY mostRecentInteraction desc;
  `, [
    thisUserId,
    thisUserId
  ]);

  return users;
}

export default getAllUsers;
