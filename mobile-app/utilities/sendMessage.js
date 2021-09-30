import moment from 'moment';

import addMessage from '../db/messages/addMessage';
import api from './api';
import encryptMessage from './crypto/encryptMessage';
import generateId from './generateId';
import getSignature from './crypto/getSignature';
import updateMessage from '../db/messages/updateMessage';

const sendMessage = async ({ content, sender, receiver }) => {
  const baseMessage = {
    id: generateId(),
    sentFrom: sender.id,
    sentTo: receiver.id
  };

  //create a message to save here, encrypted for sender
  const localMessage = {
    ...baseMessage,
    content
  }

  //add the local message to our sqlitie db
  await addMessage(localMessage);

  //create a message to send, encrypted for receiver
  const outgoingMessage = {
    ...baseMessage,
    encryptedContent: await encryptMessage(content, receiver.publicKey),
    signature: await getSignature(content),
  }

  //send the outgoing message to the server
  //TODO handle error
  return api.sendMessage(outgoingMessage).then(() => updateMessage({
    id: baseMessage.id,
    sentAt: moment().format()
  }));
}

export default sendMessage;
