import React from 'react';

import NewContactButton from '../../components/contacts/NewContactButton';
import NoContacts from '../../components/contacts/NoContacts';
import PageContainer from '../../components/common/PageContainer';

const Contacts = () => {
  return (
    <PageContainer>
      <NoContacts />
      <NewContactButton />
    </PageContainer>
  )
}

export default Contacts;
