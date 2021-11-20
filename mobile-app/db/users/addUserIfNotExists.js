import api from '../../utilities/api';
import db from '../../db';
import generateId from '../../utilities/generateId';
import getUser from './getUser';

const addUserIfNotExists = async (userId, userData) => {
  let localUser = await getUser(userId);

  if(localUser)
    return localUser;

  const user = userData || await api.getUser(userId)
    .then(res => res.data)
    .catch(err => console.log(err));

  const newLocalUser = {
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
    newLocalUser.id,
    newLocalUser.serverId,
    newLocalUser.username,
    newLocalUser.publicKey,
    newLocalUser.firstName,
    newLocalUser.middleName,
    newLocalUser.lastName,
    newLocalUser.email,
    newLocalUser.phone
  ]);

  return newLocalUser;
}

export default addUserIfNotExists;
