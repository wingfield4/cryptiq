import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import TextField from '../../common/TextField';
import UserList from '../../users/UserList';

import api from '../../../utilities/api';
import getAllUsers from '../../../db/users/getAllUsers';

const StartNewConversation = (props) => {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState(null);
  const navigation = useNavigation();

  useEffect(async () => {
    const foundUsers = await getAllUsers();
    setUsers(foundUsers);
  }, [])

  const handlePressUser = (user) => {
    if(props.onClose)
      props.onClose();

    navigation.navigate('Conversation', { user });
  }

  const handleSearch = async () => {
    const foundUsers = await api.searchForUser({
      username
    });

    setUsers(foundUsers);
  }

  return (
    <>
      <TextField
        value={username}
        onChangeText={setUsername}
        placeholder="Search by username..."
        blurOnSubmit
        returnKeyType="search"
        onSubmitEditing={handleSearch}
        autoCorrect={false}
      />
      {users &&
        <UserList
          users={users}
          onPressUser={handlePressUser}
        />
      }
    </>
  )
}

export default StartNewConversation;
