/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

/* polyffill to let us generate uuids */
import 'react-native-get-random-values';

AppRegistry.registerComponent(appName, () => App);
