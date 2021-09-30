import React from 'react';
import {
  SectionList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Divider from '../../common/Divider';
import NoContacts from '../NoContacts';
import SectionHeader from './SectionHeader';
import UserListItem from '../../users/UserList/UserListItem';

const UserList = ({ contacts }) => {
  const navigation = useNavigation();

  /* TODO can we use reduce or something idk probably */
  let sections = SECTIONS.map(title => ({
    title,
    data: []
  }))

  contacts.forEach(user => {
    let firstChar = user.username[0];

    sections.forEach(section => {
      if(section.title.toLowerCase() === firstChar.toLowerCase())
        section.data.push(user);
    })
  })

  const handlePressContact = (user) => {
    navigation.navigate('Conversation', { user: user })
  }

  return (
    <SectionList
      sections={sections.filter(section => section.data.length > 0)}
      keyExtractor={user => user.id}
      renderItem={({ item }) => <UserListItem user={item} onPress={() => handlePressContact(item)} />}
      renderSectionHeader={({ section: { title } }) => (
        <SectionHeader title={title} />
      )}
      ItemSeparatorComponent={Divider}
      ListEmptyComponent={NoContacts}
    />
  )
}

export default UserList;

const SECTIONS = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
  'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 
  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', 
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '_'
]
