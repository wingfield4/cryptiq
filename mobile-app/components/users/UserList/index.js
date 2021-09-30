import React from 'react';
import {
  FlatList
} from 'react-native';

import Divider from '../../common/Divider';
import NoUsers from '../NoUsers';
import UserListItem from './UserListItem';

const UserList = ({ onPressUser, users }) => {
  return (
    <FlatList
      data={users}
      keyExtractor={user => user.id}
      renderItem={({ item }) => <UserListItem user={item} onPress={() => onPressUser(item)} />}
      ItemSeparatorComponent={Divider}
      ListEmptyComponent={NoUsers}
    />
  )
}

export default UserList;
