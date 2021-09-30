import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

import Text from '../../common/Text';

import formatName from '../../../utilities/formatName';

const UserListItem = ({ user, ...props }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      {...props}
    >
      <Text style={styles.name}>{formatName(user)}</Text>
      <Text style={styles.username}>{user.username}</Text>
    </TouchableOpacity>
  )
}

export default UserListItem;

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  name: {
    fontSize: 18
  },
  username: {
    fontSize: 12
  }
})
