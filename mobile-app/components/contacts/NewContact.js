import React, { useState } from 'react';

import Loading from '../common/Loading';
import TextField from '../common/TextField';
import UserList from '../users/UserList';

import api from '../../utilities/api';
import addContact from '../../db/contacts/addContact';
import addUserIfNotExists from '../../db/users/addUserIfNotExists';

const NewContact = (props) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(null);

  const handleAddContact = async (user) => {
    await addContact(user.id);

    if(props.onAddContact)
      props.onAddContact(user);
  }

  const handleSearch = async () => {
    setLoading(true);
    setUsers(null);

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
        autoFocus
      />
      {loading &&
        <Loading
          style={{ marginTop: 24 }}
        />
      }
      {users &&
        <UserList
          users={users}
          onPressUser={handleAddContact}
        />
      }
    </>
  )
}

export default NewContact;
