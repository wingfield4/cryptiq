import React, { useEffect } from 'react';
//import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { connect } from 'react-redux';
import messaging from '@react-native-firebase/messaging';

import api from '../../utilities/api';

const NotificationManager = ({ currentUser }) => {
  // useEffect(() => {
  //   PushNotificationIOS.addEventListener('register', token => {
  //     api.registerIOSDevice({ token, userId: currentUser.id });
  //   });

  //   PushNotificationIOS.addEventListener('registrationError', registrationError => {
  //     console.log(registrationError)
  //   });

  //   // TODO handle notifications in-app

  //   PushNotificationIOS.requestPermissions();
  // }, [])
  useEffect(async () => {
    const authStatus = await messaging().requestPermission();

    const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);

      // Get the device token
      let token = await messaging().getToken();

      if(token) {
        console.log('token', token);
        api.registerIOSDevice({ token, userId: currentUser.id });
      }

      messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Message handled in the background!', remoteMessage);
      });
    }

    // Listen to whether the token changes
    return messaging().onTokenRefresh(token => {
      saveTokenToDatabase(token);
    });
  }, [])

  useEffect(() => {
    /* HANDLE BACKGROUND STATE NOTIFICATION */
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('Notification caused app to open from background state:', remoteMessage.notification);
      //TODO redirect to message chain or overview
    });

    /* HANDLE CLOSED STATE NOTIFICATION */
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification caused app to open from quit state:', remoteMessage.notification);
          //TODO redirect to message chain or overview
        }
      });

    /* HANDLE ACTIVE STATE NOTIFICATION */
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('New message: ', remoteMessage);
      //handle message
    });

    return unsubscribe;
  }, [])

  return (
    <></>
  )
}

export default connect(state => ({
  currentUser: state.currentUser
}))(NotificationManager);
