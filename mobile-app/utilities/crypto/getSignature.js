import { RSAKeychain } from 'react-native-rsa-native';
import getKeyTag from './getKeyTag';

const getSignature = async (encryptedMessage) => {
  return await RSAKeychain.sign(encryptedMessage, getKeyTag());
}

export default getSignature;
