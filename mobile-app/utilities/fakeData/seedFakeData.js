import messages from './messages';
import users from './users';

import addMessage from '../../db/messages/addMessage';
import addUser from '../../db/users/addUser';

const seedFakeData = async () => {
  //seed users
  for(let i = 0; i < users.length; i++) {
    await addUser(users[i]);
  }

  //seed messages
  for(let i = 0; i < messages.length; i++) {
    await addMessage(messages[i]);
  }
}

export default seedFakeData;
