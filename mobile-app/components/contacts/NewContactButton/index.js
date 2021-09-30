import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';

import FAB from '../../common/FAB';
import Icon from '../../common/Icon';
import Modal from '../../common/rn/Modal';
import NewContact from '../NewContact';

const NewConversationButton = ({ colors, onAddContact }) => {
  const [visible, setVisible] = useState(false);

  const handleAddContact = (user) => {
    onAddContact(user);
    setVisible(false);
  }

  return (
    <>
      <FAB onPress={() => setVisible(true)}>
        <Icon name="plus" size={24} color={colors.accent5Text} />
      </FAB>
      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.closeContainer}>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Icon name="close" size={32} />
          </TouchableOpacity>
        </View>
        <NewContact onAddContact={handleAddContact} />
      </Modal>
    </>
  )
}

export default connect(state => ({
  colors: state.colors
}))(NewConversationButton);

const styles = StyleSheet.create({
  closeContainer: {
    alignItems: 'flex-end',
    padding: 16
  }
})
