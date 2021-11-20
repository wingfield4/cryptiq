import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';

const UserManager = ({ currentUser, dispatch, onComplete }) => {
  useEffect(async () => {
    await AsyncStorage.removeItem('userId'); //for debugging
    const userId = await AsyncStorage.getItem('userId');
    
    if(userId) {
      dispatch({
        type: 'setCurrentUser',
        user: { id: userId }
      })
    }
  }, []);

  useEffect(async () => {
    if(currentUser) {
      await AsyncStorage.setItem('userId', currentUser.id.toString());
    }
  }, [currentUser]);

  return (
    <></>
  )
}

export default connect(state => ({
  currentUser: state.currentUser
}))(UserManager);
