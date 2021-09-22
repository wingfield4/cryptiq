import { createStore, combineReducers } from 'redux';
import colors from './colors';

const DEFAULT_COLOR_MODE = 'dark';

const setColors = (state, action) => {
  if(!state) return colors[DEFAULT_COLOR_MODE];

  switch (action.type) {
    case 'setColorMode':
      return colors[action.mode];
    default:
      return state;
  }
}

const setColorMode = (state, action) => {
  if(!state) return DEFAULT_COLOR_MODE;

  switch (action.type) {
    case 'setColorMode':
      return action.mode;
    default:
      return state;
  }
}

const setCurrentUser = (state, action) => {
  if(state === undefined) return null;

  switch (action.type) {
    case 'setCurrentUser':
      return action.user;
    default:
      return state;
  }
}

const setMessageListeners = (state, action) => {
  if(state === undefined) return {};

  switch (action.type) {
    case 'addMessageListener':
      return { ...state, [action.id]: action.onAddMessage };
    case 'removeMessageListener':
      return { ...state, [action.id]: undefined };
    default:
      return state;
  }
}

export default createStore(combineReducers({
  colors: setColors,
  colorMode: setColorMode,
  currentUser: setCurrentUser,
  messageListeners: setMessageListeners
}));
