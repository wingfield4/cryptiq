import SQLite from 'react-native-sqlite-storage';

const database = SQLite.openDatabase({ name: 'db.secure-messenger' });

class Database {
  executeSql = async (sql, params = []) => {
    return new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(sql, params, (tx, results) => {
          let toReturn = [];
          var len = results.rows.length;
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            toReturn.push(row);
          }
          resolve(toReturn)
        }, (error) => {
          console.log('DB ERROR: ', error)
          reject(error);
        })
      })
    })
  }

  up = async () => {
    await this.executeSql(`
      CREATE TABLE IF NOT EXISTS user (
        id TEXT PRIMARY KEY,
        publicKey TEXT,
        firstName TEXT,
        middleName TEXT,
        lastName TEXT,
        email TEXT,
        phone TEXT
      )
    `);

    await this.executeSql(`
      CREATE TABLE IF NOT EXISTS message (
        id TEXT PRIMARY KEY,
        encryptedContent TEXT,
        sentAt TEXT,
        sentFrom TEXT,
        sentTo TEXT,
        receivedAt TEXT,
        readAt TEXT
      )
    `);
  }

  down = async () => {
    await this.executeSql('DROP TABLE IF EXISTS user');
    await this.executeSql('DROP TABLE IF EXISTS message');
  }
}

const db = new Database();
export default db;
