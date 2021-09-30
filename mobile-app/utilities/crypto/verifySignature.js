import { RSA } from 'react-native-rsa-native';

const verifySignature = async (signature, message, publicKey) => {
  return await RSA.verify(signature, message, publicKey);
}

export default verifySignature;
