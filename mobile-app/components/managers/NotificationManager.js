import React, { useEffect } from 'react';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { connect } from 'react-redux';

import api from '../../utilities/api';

const NotificationManager = ({ currentUser }) => {
  useEffect(() => {
    PushNotificationIOS.addEventListener('register', token => {
      api.registerIOSDevice({ token, userId: currentUser.id });
    });

    PushNotificationIOS.addEventListener('registrationError', registrationError => {
      console.log(registrationError)
    });

    // TODO handle notifications in-app

    PushNotificationIOS.requestPermissions();
  }, [])

  return (
    <></>
  )
}

export default connect(state => ({
  currentUser: state.currentUser
}))(NotificationManager);
