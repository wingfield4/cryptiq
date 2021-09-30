import React from 'react';
import {
  StyleSheet
} from 'react-native';

import AccountHeader from '../../components/account/AccountHeader';
import AccountInformation from '../../components/account/AccountInformation';
import PageContainer from '../../components/common/PageContainer';
import ProfilePicture from '../../components/account/ProfilePicture';

const Account = () => {
  return (
    <PageContainer style={styles.container}>
      <AccountHeader />
      <AccountInformation />
      <ProfilePicture />
    </PageContainer>
  )
}

export default Account;

const styles = StyleSheet.create({
  container: {
    padding: 8
  }
});
