import db from '../../db';

const getAllContacts = async () => {
  const contacts = await db.executeSql(`
    SELECT 
      u.*,
      c.createdAt
    FROM contact c
    JOIN user u ON c.userId = u.id
    ORDER BY u.username desc;
  `);

  return contacts;
}

export default getAllContacts;
