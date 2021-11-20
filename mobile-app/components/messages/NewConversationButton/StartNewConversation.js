import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Loading from '../../common/Loading';
import TextField from '../../common/TextField';
import UserList from '../../users/UserList';

import api from '../../../utilities/api';
import addUserIfNotExists from '../../../db/users/addUserIfNotExists';
import getAllUsers from '../../../db/users/getAllUsers';

const StartNewConversation = (props) => {
  const [loading, setLoading] = useState(false);
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
    setUsers(null);
    setLoading(true);

    const foundUsers = await api.searchForUsers({
        username
      })
      .then(async res => await Promise.all(res.data.map(async user => await addUserIfNotExists(user.id, user))))
      .catch(err => console.log(err));

    setLoading(false);
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
      {loading && <Loading />}
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
