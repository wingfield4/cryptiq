import moment from 'moment';

import db from '../../db';

const addContact = async (userId) => {
  await db.executeSql(`
    INSERT INTO contact (
      userId,
      createdAt
    )
    VALUES (?, ?)
  `, [
    userId,
    moment().format()
  ]);
}

export default addContact;
