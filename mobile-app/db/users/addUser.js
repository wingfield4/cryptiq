import db from '../../db';

const addUser = async (user) => {
  await db.executeSql(`
    INSERT INTO user (
      id, 
      publicKey, 
      firstName, 
      middleName, 
      lastName, 
      email, 
      phone
    )
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `, [
    user.id,
    user.publicKey,
    user.firstName,
    user.middleName,
    user.lastName,
    user.email,
    user.phone
  ]);
}

export default addUser;
