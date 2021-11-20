import messages from './messages';
import getUsers from './getUsers';

import addMessage from '../../db/messages/addMessage';
import addUser from '../../db/users/addUser';

const seedFakeData = async () => {
  //seed users
  // let users = await getUsers();
  // for(let i = 0; i < users.length; i++) {
  //   await addUser(users[i]);
  // }

  // //seed messages
  // for(let i = 0; i < messages.length; i++) {
  //   await addMessage(messages[i]);
  // }
}

export default seedFakeData;
