import db from '../../db';

const getUser = async (userServerId) => {
  let users = await db.executeSql(`
    SELECT 
      *
    FROM user u
    WHERE serverId = ?;
  `, [
    userServerId
  ]);

  return users.length > 0 ? users[0] : null;
}

export default getUser;
