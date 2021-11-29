import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import messaging from '@react-native-firebase/messaging';

import api from '../../utilities/api';
import addMessage from '../../db/messages/addMessage';
import addUserIfNotExists from '../../db/users/addUserIfNotExists';
import decryptMessage from '../../utilities/crypto/decryptMessage';
import generateId from '../../utilities/generateId';

const NotificationManager = ({ currentUser }) => {
  const navigation = useNavigation();

  /* HANDLES PERMISSIONS AND REGISTERING TOKEN */
  useEffect(async () => {
    const authStatus = await messaging().requestPermission();

    const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      // Get the device token
      let deviceToken = await messaging().getToken();

      if(deviceToken) {
        api.registerDevice({ deviceToken, userId: currentUser.serverId });
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

  /* HANDLE MESSAGE EVENTS */
  useEffect(() => {
    const handleMessage = async (remoteMessage, navigateToConversation = false) => {
      const sentFromUserId = parseInt(remoteMessage.data.sentFrom, 10);
      let user = await addUserIfNotExists(sentFromUserId);
      
      await addMessage({
        id: generateId(),
        serverId: parseInt(remoteMessage.data.id, 10),
        content: await decryptMessage(remoteMessage.data.encryptedContent),
        sentAt: remoteMessage.data.sentAt,
        sentFrom: sentFromUserId,
        sentTo: parseInt(remoteMessage.data.sentTo, 10),
        receivedAt: remoteMessage.data.receivedAt,
        readAt: remoteMessage.data.readAt
      });

      if(navigateToConversation)
        navigation.navigate('Conversation', { user });
    }

    /* HANDLE BACKGROUND STATE NOTIFICATION */
    messaging().onNotificationOpenedApp(remoteMessage => {
      handleMessage(remoteMessage, true);
      //handle redirect?
    });

    /* HANDLE CLOSED STATE NOTIFICATION */
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          handleMessage(remoteMessage, true);
        }
      });

    /* HANDLE ACTIVE STATE NOTIFICATION */
    const unsubscribe = messaging().onMessage(remoteMessage => handleMessage(remoteMessage));

    return unsubscribe;
  }, [navigation])

  return (
    <></>
  )
}

export default connect(state => ({
  currentUser: state.currentUser
}))(NotificationManager);
