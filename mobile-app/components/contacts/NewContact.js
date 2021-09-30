import React, { useState } from 'react';

import TextField from '../common/TextField';
import UserList from '../users/UserList';

import api from '../../utilities/api';
import addContact from '../../db/contacts/addContact';

const NewContact = (props) => {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState(null);

  const handleAddContact = async (user) => {
    await addContact(user.id);

    if(props.onAddContact)
      props.onAddContact(user);
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
          onPressUser={handleAddContact}
        />
      }
    </>
  )
}

export default NewContact;
