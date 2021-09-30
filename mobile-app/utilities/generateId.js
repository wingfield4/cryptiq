/* polyfill to let us generate uuids */
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const generateId = () => {
  return uuidv4();
}

export default generateId;
