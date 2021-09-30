import { RSAKeychain } from 'react-native-rsa-native';
import getKeyTag from './getKeyTag';

const decryptMessage = async (encodedMessage) => {
  return await RSAKeychain.decrypt(encodedMessage, getKeyTag());
}

export default decryptMessage;
