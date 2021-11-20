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
    sentFrom: sender.serverId || sender.id,
    sentTo: receiver.serverId || receiver.id
  };

  //create a message to save here, encrypted for sender
  const localMessage = {
    ...baseMessage,
    content
  }

  //add the local message to our sqlitie db
  await addMessage(localMessage, true);

  //create a message to send, encrypted for receiver
  const encryptedContent = await encryptMessage(content, receiver.publicKey);
  const outgoingMessage = {
    ...baseMessage,
    id: undefined,
    encryptedContent,
    signature: await getSignature(encryptedContent),
  }

  //send the outgoing message to the server
  //TODO handle error
  return api.sendMessage(outgoingMessage)
    .then(res => updateMessage({
      id: baseMessage.id,
      serverId: res.data.id,
      sentAt: res.data.sentAt
    }))
    .catch(err => console.log(err));
}

export default sendMessage;
