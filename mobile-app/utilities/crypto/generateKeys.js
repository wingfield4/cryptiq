import { RSAKeychain } from 'react-native-rsa-native';
import getKeyTag from './getKeyTag';

const generateKeys = async ({ username }) => {
  //using RSA2048
  const bits = 2048;
  const keyTag = getKeyTag(username);

  // saves private key in keychain and gets publc key
  let keys = await RSAKeychain.generateKeys(keyTag, bits);
  // return public key
  return keys.public;
}

export default generateKeys;
