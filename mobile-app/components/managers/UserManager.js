import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';

const DatabaseManager = ({ currentUser, dispatch, onComplete }) => {
  useEffect(async () => {
    const userId = 'awfabpiubfaw';

    await AsyncStorage.setItem('userId', userId);
    dispatch({
      type: 'setCurrentUser',
      user: { id: userId }
    })
  }, [])

  return (
    <></>
  )
}

export default connect(state => ({
  currentUser: state.currentUser
}))(DatabaseManager);
