import { RSAKeychain } from 'react-native-rsa-native';
import getKeyTag from './getKeyTag';

const getSignature = async (message) => {
  return await RSAKeychain.sign(message, getKeyTag());
}

export default getSignature;
