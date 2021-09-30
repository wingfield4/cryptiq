import { RSA } from 'react-native-rsa-native';

const generateFakeKeys = async () => {
  return await RSA.generate();
}

export default generateFakeKeys;
