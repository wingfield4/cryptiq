import db from '../../db';
import generateId from '../../utilities/generateId';

const addUser = async (user) => {

  const addedUser = {
    id: generateId(),
    serverId: user.id,
    username: user.username,
    publicKey: user.publicKey,
    firstName: user.firstName,
    middleName: user.middleName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone
  }

  await db.executeSql(`
    INSERT INTO user (
      id,
      serverId,
      username,
      publicKey, 
      firstName, 
      middleName, 
      lastName, 
      email, 
      phone
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [
    addedUser.id,
    addedUser.serverId,
    addedUser.username,
    addedUser.publicKey,
    addedUser.firstName,
    addedUser.middleName,
    addedUser.lastName,
    addedUser.email,
    addedUser.phone
  ]);

  return addedUser;
}

export default addUser;
