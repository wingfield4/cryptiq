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
import StartNewConversation from './StartNewConversation';

const NewConversationButton = ({ colors }) => {
  const [visible, setVisible] = useState(false);

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
        <StartNewConversation />
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
