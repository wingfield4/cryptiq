import axios from 'axios';

import getAllUsers from "../db/users/getAllUsers";
import generateId from "./generateId";
import generateUsername from "./generateUsername";

const BASE_URL = `https://cryptiq.appspot.com`
const FAKE_TIMEOUT = 1000;

const api = {
  /* CREATE NEW USER */
  createUser: user => axios.post(`${BASE_URL}/api/v1/users/create`, user),

  /* SEARCH FOR USER */
  searchForUsers: query => axios.get(`${BASE_URL}/api/v1/users/search`, query),
  getUser: userId => axios.get(`${BASE_URL}/api/v1/users/${userId}`),

  /* SEND MESSAGE */
  sendMessage: message => axios.post(`${BASE_URL}/api/v1/messages/send`, message),

  /* GET RANDOM USERNAME */
  generateUsername: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(generateUsername());
      }, FAKE_TIMEOUT);
    })
  },

  /* REGISTER IOS DEVICE FOR PUSH NOTIFICATIONS */
  registerDevice: params => axios.post(`${BASE_URL}/api/v1/users/setDeviceToken`, params)
}

export default api;
