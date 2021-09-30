import store from '../store';

const getKeyTag = (username) => {
  const { currentUser } = store.getState();
  return `io.cryptiq.${username ? username : currentUser.username}_pk`;
}

export default getKeyTag;
