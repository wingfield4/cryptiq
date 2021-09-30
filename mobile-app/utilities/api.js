import getAllUsers from "../db/users/getAllUsers";
import generateId from "./generateId";

const FAKE_TIMEOUT = 1000;

const api = {
  /* CREATE NEW USER */
  createUser: (user) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          id: generateId(),
          ...user
        });
      }, FAKE_TIMEOUT);
    });
  },

  /* SEARCH FOR USER */
  searchForUser: ({ 
    username
  }) => {
    return new Promise(async resolve => {
      let users = await getAllUsers();

      setTimeout(() => {
        resolve(users);
      }, FAKE_TIMEOUT);
    });
  },

  /* SEND MESSAGE */
  sendMessage: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, FAKE_TIMEOUT);
    })
  }
}

export default api;
