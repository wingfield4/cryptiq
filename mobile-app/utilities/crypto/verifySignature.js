import { RSA } from 'react-native-rsa-native';

const verifySignature = async (signature, encryptedMessage, publicKey) => {
  return await RSA.verify(signature, encryptedMessage, publicKey);
}

export default verifySignature;
