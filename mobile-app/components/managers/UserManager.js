import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';

const UserManager = ({ currentUser, dispatch, onComplete }) => {
  useEffect(async () => {
    const userId = 'awfabpiubfaw';

    await AsyncStorage.removeItem('userId');
    // await AsyncStorage.setItem('userId', userId);
    // dispatch({
    //   type: 'setCurrentUser',
    //   user: { id: userId }
    // })
  }, [])

  return (
    <></>
  )
}

export default connect(state => ({
  currentUser: state.currentUser
}))(UserManager);
