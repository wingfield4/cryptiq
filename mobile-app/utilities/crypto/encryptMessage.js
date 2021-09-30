import { RSA } from 'react-native-rsa-native';

const encryptMessage = async (message, publicKey) => {
  return await RSA.encrypt(message, publicKey);
}

export default encryptMessage;
