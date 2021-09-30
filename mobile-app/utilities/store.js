import { createStore, combineReducers } from 'redux';
import colors from './colors';

const DEFAULT_COLOR_MODE = 'dark';

/* STATE */
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

/* EVENTS */
const setNewMessageListeners = (state, action) => {
  if(state === undefined) return {};

  switch (action.type) {
    case 'addNewMessageListener':
      return { ...state, [action.id]: action.onAddMessage };
    case 'removeNewMessageListener':
      return { ...state, [action.id]: undefined };
    default:
      return state;
  }
}

const setUpdateMessageListeners = (state, action) => {
  if(state === undefined) return {};

  switch (action.type) {
    case 'addUpdateMessageListener':
      return { ...state, [action.id]: action.onAddMessage };
    case 'removeUpdateMessageListener':
      return { ...state, [action.id]: undefined };
    default:
      return state;
  }
}

const setReadMessageListeners = (state, action) => {
  if(state === undefined) return {};

  switch (action.type) {
    case 'addReadMessageListener':
      return { ...state, [action.id]: action.onAddMessage };
    case 'removeReadMessageListener':
      return { ...state, [action.id]: undefined };
    default:
      return state;
  }
}

/* EXPORT */
export default createStore(combineReducers({
  colors: setColors,
  colorMode: setColorMode,
  currentUser: setCurrentUser,
  newMessageListeners: setNewMessageListeners,
  updateMessageListeners: setUpdateMessageListeners,
  readMessageListeners: setReadMessageListeners
}));
