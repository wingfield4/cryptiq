import React, { useState } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

import KeyboardSpacer from '../common/KeyboardSpacer';
import SendButton from './SendButton';
import TextInput from '../common/TextInput';

const MessageInput = (props) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if(input.length > 0) {
      props.onSend(input);
      setInput('');
    }
  }

  return (
    <>
      <View style={styles.outerContainer}>
        <View
          style={{
            ...styles.container,
            borderColor: props.colors.border
          }}
        >
          <TextInput
            multiline
            placeholder="Message..."
            value={input}
            onChangeText={setInput}
            style={styles.textInput}
          />
          <SendButton onSend={handleSend} />
        </View>
      </View>
      <KeyboardSpacer />
    </>
  )
}

export default connect(state => ({
  colors: state.colors
}))(MessageInput);

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    borderWidth: 1,
    paddingLeft: 12,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  outerContainer: {
    padding: 8
  },
  textInput: {
    flex: 1,
  }
})
