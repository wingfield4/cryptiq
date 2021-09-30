import React, { useEffect, useState } from 'react';

import ContactList from '../../components/contacts/ContactList';
import NewContactButton from '../../components/contacts/NewContactButton';
import PageContainer from '../../components/common/PageContainer';

import getAllContacts from '../../db/contacts/getAllContacts';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(async () => {
    const foundContacts = await getAllContacts();

    setContacts(foundContacts);
  }, []);

  const handleAddContact = (newContact) => {
    setContacts([ newContact, ...contacts ]);
  }

  return (
    <PageContainer>
      <ContactList contacts={contacts} />
      <NewContactButton onAddContact={handleAddContact} />
    </PageContainer>
  )
}

export default Contacts;
