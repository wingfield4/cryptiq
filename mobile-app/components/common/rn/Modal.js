import React from 'react';
import { Modal as RNModal, SafeAreaView } from 'react-native';

import PageContainer from '../PageContainer';

const Modal = ({ children, ...props }) => {
  return (
    <RNModal {...props}>
      <PageContainer>
        <SafeAreaView style={{ flex: 1 }}>
          {children}
        </SafeAreaView>
      </PageContainer>
    </RNModal>
  )
}

export default Modal;
